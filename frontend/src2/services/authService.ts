import { apiService } from './apiService'

interface LoginCredentials {
  email: string
  password: string
}

interface RegisterData extends LoginCredentials {
  username: string
}

export const authService = {
  login: async (credentials: LoginCredentials) => {
    try {
      const response = await apiService.post('/auth/login', credentials)
      const { token, user } = response.data
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      return user
    } catch (error) {
      throw new Error('登录失败')
    }
  },

  register: async (data: RegisterData) => {
    try {
      const response = await apiService.post('/auth/register', data)
      const { token, user } = response.data
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      return user
    } catch (error) {
      throw new Error('注册失败')
    }
  },

  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.href = '/login'
  },

  getCurrentUser: () => {
    const userStr = localStorage.getItem('user')
    return userStr ? JSON.parse(userStr) : null
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('token')
  }
}
