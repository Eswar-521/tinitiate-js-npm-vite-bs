import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'devserver-main--tinitiate-yarn-js.netlify.app' // 👈 your Netlify domain
    ]
  }
})
