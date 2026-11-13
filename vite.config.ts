import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Served from https://sagiesh.github.io/personal-website/
  base: '/personal-website/',
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/testSetup.ts'],
  },
})
