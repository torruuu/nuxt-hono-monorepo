import { authClient } from '@/lib/auth/auth-client'
import { useQuery } from '@tanstack/vue-query'

export function useSession() {
  const query = useQuery({
    queryKey: ['auth-session'],
    queryFn: async () => await authClient.getSession(),
    staleTime: 1000 * 30,
  })

  watch([query.error, query.data], ([error, data]) => {
    if (error || !data?.data) reloadNuxtApp()
  })

  const session = computed(() => query.data.value?.data ?? null)

  return { session, ...query }
}
