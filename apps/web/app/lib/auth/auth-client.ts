import type { auth } from '@starter-app/api/auth'
import { inferAdditionalFields } from 'better-auth/client/plugins'
import { createAuthClient } from 'better-auth/vue'

export const authClient = createAuthClient({
  fetchOptions: {
    credentials: 'include',
  },
  plugins: [inferAdditionalFields<typeof auth>()],
})
