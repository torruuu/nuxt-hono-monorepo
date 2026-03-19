import { useQuery } from '@tanstack/vue-query'
import { authClient } from '@web/lib/auth/auth-client'

export function useSession() {
  const query = useQuery({
    queryKey: ['auth-session'],
    queryFn: async () => await authClient.getSession(),
    staleTime: 1000 * 30, // 30 seconds
  })

  watch([query.error, query.data], ([error, data]) => {
    if (error || !data?.data) reloadNuxtApp()
  })

  const session = computed(() => query.data.value?.data ?? null)

  return { session, ...query }
}
