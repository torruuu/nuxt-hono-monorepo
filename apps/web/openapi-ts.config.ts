import { defineConfig } from '@hey-api/openapi-ts'
import { config } from 'dotenv'

config()

export default defineConfig({
  input: `${process.env.NUXT_API_BASE}/docs`,
  output: 'app/client',
  plugins: [
    { name: '@hey-api/client-fetch', baseUrl: process.env.VITE_API_URL },
    { name: '@tanstack/vue-query' },
  ],
})
