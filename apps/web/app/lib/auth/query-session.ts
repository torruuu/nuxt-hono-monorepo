import { authClient } from '@/lib/auth/auth-client'
import { useQueryClient } from '@tanstack/vue-query'

export const querySession = () => {
  const queryClient = useQueryClient()

  return queryClient.ensureQueryData({
    queryKey: ['auth-session'],
    queryFn: async () => {
      const { data } = await authClient.useSession(useFetch)
      return data.value
    },
    staleTime: 1000 * 30, // 30 seconds
  })
}
