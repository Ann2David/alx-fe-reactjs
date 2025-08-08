// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // if you’re using React
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()]
    }
  }
})