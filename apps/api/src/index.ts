import app from '@api/app.js'
import env from '@api/env.js'
import { serve } from '@hono/node-server'

serve({
  fetch: app.fetch,
  port: env.PORT,
})

console.log(`Server is running on port ${env.PORT}`)
