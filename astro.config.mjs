import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import serviceWorker from 'astrojs-service-worker'

// https://astro.build/config
export default defineConfig({
  site: 'https://jesusvallez.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
    serviceWorker(),
  ],
})
