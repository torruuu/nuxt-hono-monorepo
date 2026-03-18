import { authClient } from '@/lib/auth/auth-client'
import { useQueryClient } from '@tanstack/vue-query'

export default defineNuxtRouteMiddleware(async (to, _from) => {
  const nuxtApp = useNuxtApp()

  // Skip during client hydration: SSR already handled the redirect.
  // Without this, the client re-runs the middleware before the cache is ready,
  // causing a flash of the wrong page and hydration mismatches.
  if (import.meta.client && nuxtApp.isHydrating) return

  const queryClient = useQueryClient()
  const { data } = await queryClient.ensureQueryData({
    queryKey: ['auth-session'],
    queryFn: async () => await authClient.useSession(useFetch),
  })

  if (!data?.value) {
    if (to.path !== '/login') return navigateTo('/login')
    return
  }

  if (to.path === '/login') return navigateTo('/')
})
