import { createAuthClient } from 'better-auth/vue'

export const authClient = createAuthClient({
  fetchOptions: {
    credentials: 'include',
  },
})
