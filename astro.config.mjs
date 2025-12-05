import { defineConfig } from 'astro/config'

export default defineConfig({
  base: '/KEME-AGIDI/',
  output: 'static',
  vite: {
    ssr: {
      external: ['bootstrap']
    }
  }
})
