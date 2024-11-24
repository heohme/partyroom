import { Game, Card, Player } from './game'

export interface GameState {
  game: Game | null
  loading: boolean
  error: string | null
  selectedCard: Card | null
}

export interface UIState {
  theme: 'light' | 'dark'
  language: string
  notifications: Notification[]
  modals: Modal[]
  loading: boolean
}

export interface Notification {
  id: string
  type: 'success' | 'error' | 'info' | 'warning'
  message: string
  duration?: number
}

export interface Modal {
  id: string
  type: string
  title: string
  content: React.ReactNode
  onConfirm?: () => void
  onCancel?: () => void
}

export interface UserState {
  user: User | null
  decks: Deck[]
  collection: Card[]
  loading: boolean
  error: string | null
}

export interface User {
  id: string
  username: string
  email: string
  avatar?: string
  stats: UserStats
}

export interface UserStats {
  gamesPlayed: number
  gamesWon: number
  winRate: number
  rank: number
  rating: number
}

export interface Deck {
  id: string
  name: string
  cards: Card[]
}
