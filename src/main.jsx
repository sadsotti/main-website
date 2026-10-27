import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import '@fontsource/space-grotesk/300.css'
import '@fontsource/space-grotesk/400.css'
import '@fontsource/space-grotesk/500.css'
import '@fontsource/space-grotesk/600.css'
import '@fontsource/space-grotesk/700.css'
import './index.css'
import App from './App.jsx'

document.querySelectorAll('[data-seo]').forEach((el) => el.remove())

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
)

const loader = document.getElementById('loader')
if (loader) {
  const barra = loader.querySelector('.loader-barra span')
  barra.style.width = getComputedStyle(barra).width
  barra.style.animation = 'none'
  requestAnimationFrame(() => {
    barra.style.transition = 'width 0.3s ease'
    barra.style.width = '100%'
    setTimeout(() => {
      loader.classList.add('nascosto')
      loader.addEventListener('transitionend', () => loader.remove(), { once: true })
    }, 300)
  })
}
