import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://mane32.github.io/gh-react-vite/',
  plugins: [react()]
})
