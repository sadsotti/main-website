import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { PAGES, SITE_URL } from './src/lib/site.js'

const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

const setMeta = (html, attr, key, value) =>
  html.replace(
    new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`),
    `$1${escapeHtml(value)}$2`
  )

const ROUTE_PAGES = {
  '/about': 'About',
  '/servizi': 'Services',
  '/portfolio': 'Portfolio',
  '/contatti': 'Contact',
  '/start2impact': 'start2impact',
  '/lab': 'Lab',
  '/privacy': 'Privacy',
  '/diritti': 'Diritti',
}

const ROUTE_IMAGES = {
  '/portfolio': '/progetti/mockup-up-solutions-gestionale.webp',
}

const imagePreload = (href) => (href ? `<link rel="preload" as="image" href="${href}" fetchpriority="high">` : '')

const homeImage = (bundle) => {
  const logo = Object.values(bundle).find(
    (item) => item.type === 'asset' && (item.names ?? [item.name]).some((name) => name?.endsWith('logo.webp'))
  )
  return logo ? `/${logo.fileName}` : ''
}

const preloadTags = (bundle, path, html) => {
  const page = ROUTE_PAGES[path]
  if (!page) return ''
  const chunk = Object.values(bundle).find(
    (item) => item.type === 'chunk' && item.facadeModuleId?.replaceAll('\\', '/').endsWith(`/src/pages/${page}.jsx`)
  )
  if (!chunk) return ''
  const scripts = [chunk.fileName, ...chunk.imports].map((file) => `<link rel="modulepreload" crossorigin href="/${file}">`)
  const styles = [...(chunk.viteMetadata?.importedCss ?? [])].map((file) => `<link rel="stylesheet" crossorigin href="/${file}">`)
  return [...scripts, ...styles].filter((tag) => !html.includes(tag.match(/href="([^"]+)"/)[1])).join('')
}

function staticRouteMeta() {
  return {
    name: 'static-route-meta',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const index = bundle['index.html']
      if (!index || index.type !== 'asset') return
      const template = String(index.source)

      Object.entries(PAGES).forEach(([path, meta]) => {
        const url = `${SITE_URL}${path}`
        let html = template
          .replace(/(<title[^>]*>)[^<]*(<\/title>)/, `$1${escapeHtml(meta.title)}$2`)
          .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
        html = setMeta(html, 'name', 'description', meta.description)
        html = setMeta(html, 'property', 'og:title', meta.title)
        html = setMeta(html, 'property', 'og:description', meta.description)
        html = setMeta(html, 'property', 'og:url', url)
        html = setMeta(html, 'name', 'twitter:title', meta.title)
        html = setMeta(html, 'name', 'twitter:description', meta.description)

        if (path === '/') {
          index.source = html.replace('</head>', `${imagePreload(homeImage(bundle))}</head>`)
          return
        }

        html = html.replace('</head>', `${preloadTags(bundle, path, html)}${imagePreload(ROUTE_IMAGES[path])}</head>`)

        this.emitFile({
          type: 'asset',
          fileName: `${path.slice(1)}.html`,
          source: html,
        })
      })
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    staticRouteMeta(),
  ],
  base: '/',
})
