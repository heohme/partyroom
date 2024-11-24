export interface ApiResponse<T = any> {
    success: boolean
    data?: T
    error?: string
    message?: string
  }
  
  export interface PaginatedResponse<T> {
    items: T[]
    total: number
    page: number
    pageSize: number
    totalPages: number
  }
  
  export interface ApiError {
    code: string
    message: string
    details?: Record<string, any>
  }
  
  export interface LoginRequest {
    email: string
    password: string
  }
  
  export interface RegisterRequest {
    username: string
    email: string
    password: string
  }
  
  export interface UpdateProfileRequest {
    username?: string
    avatar?: string
    bio?: string
  }
  
  export interface CreateDeckRequest {
    name: string
    cards: string[] // card IDs
  }
  
  export interface GameActionRequest {
    gameId: string
    action: 'play' | 'attack' | 'end_turn'
    cardId?: string
    targetId?: string
  }