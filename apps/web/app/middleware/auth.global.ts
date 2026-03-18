import { querySession } from '@/lib/auth/query-session'

export default defineNuxtRouteMiddleware(async (to, _from) => {
  const nuxtApp = useNuxtApp()

  // Skip during client hydration: SSR already handled the redirect.
  // Without this, the client re-runs the middleware before the cache is ready,
  // causing a flash of the wrong page and hydration mismatches.
  if (import.meta.client && nuxtApp.isHydrating) return

  const session = await querySession()

  if (!session) {
    if (to.path !== '/login') return navigateTo('/login')
    return
  }

  if (to.path === '/login') return navigateTo('/')
})
