import { useQueryClient } from '@tanstack/vue-query'
import { authClient } from '@web/lib/auth/auth-client'

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
