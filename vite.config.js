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
          index.source = html
          return
        }

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
