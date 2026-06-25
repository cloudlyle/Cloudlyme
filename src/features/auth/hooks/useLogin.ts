import { useMutation } from '@tanstack/react-query'
import { authService } from '../services/authService'
import { useAuthStore } from '../store/authStore'
import type { LoginCredentials } from '../types'

export function useLogin() {
  const setAuth = useAuthStore((s) => s.setAuth)

  return useMutation({
    mutationFn: (credentials: LoginCredentials) =>
      authService.login(credentials).then((res) => res.data),
    onSuccess: ({ user, accessToken }) => {
      setAuth(user, accessToken)
    },
  })
}
