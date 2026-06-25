import { axiosClient } from '@api/axiosClient'
import type { AuthResponse, LoginCredentials, User } from '../types'

export const authService = {
  login: (credentials: LoginCredentials) =>
    axiosClient.post<AuthResponse>('/auth/login', credentials),

  logout: () =>
    axiosClient.post<void>('/auth/logout'),

  me: () =>
    axiosClient.get<User>('/auth/me'),
}
