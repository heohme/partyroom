import { apiService } from './apiService'

export const userService = {
  getProfile: async () => {
    const response = await apiService.get('/user/profile')
    return response.data
  },

  updateProfile: async (data: any) => {
    const response = await apiService.put('/user/profile', data)
    return response.data
  },

  getDecks: async () => {
    const response = await apiService.get('/user/decks')
    return response.data
  }
}