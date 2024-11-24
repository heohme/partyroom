import { create } from 'zustand'
import { Game, Card, Player } from '../types/game'
import { gameService } from '../services/gameService'
import { gameLogic } from '../utils/gameLogic'

interface GameState {
  game: Game | null
  loading: boolean
  error: string | null
  selectedCard: Card | null
  actions: {
    initGame: () => Promise<void>
    startGame: () => Promise<void>
    playCard: (cardId: string, targetId?: string) => Promise<void>
    attackCard: (attackerId: string, defenderId: string) => Promise<void>
    attackHero: (cardId: string) => Promise<void>
    endTurn: () => Promise<void>
    selectCard: (card: Card | null) => void
    cleanupGame: () => void
  }
}

export const useGameStore = create<GameState>((set, get) => ({
  game: null,
  loading: false,
  error: null,
  selectedCard: null,

  actions: {
    initGame: async () => {
      set({ loading: true, error: null })
      try {
        const game = await gameService.createGame()
        set({ game, loading: false })
      } catch (error) {
        set({ error: '游戏初始化失败', loading: false })
      }
    },

    startGame: async () => {
      set({ loading: true, error: null })
      try {
        const game = await gameService.startGame()
        set({ game, loading: false })
      } catch (error) {
        set({ error: '游戏开始失败', loading: false })
      }
    },

    playCard: async (cardId: string, targetId?: string) => {
      const { game } = get()
      if (!game) return

      try {
        const updatedGame = await gameService.playCard(game.id, cardId, targetId)
        set({ game: updatedGame, selectedCard: null })
      } catch (error) {
        set({ error: '出牌失败' })
      }
    },

    attackCard: async (attackerId: string, defenderId: string) => {
      const { game } = get()
      if (!game) return

      try {
        const updatedGame = await gameService.attackCard(game.id, attackerId, defenderId)
        set({ game: updatedGame, selectedCard: null })
      } catch (error) {
        set({ error: '攻击失败' })
      }
    },

    attackHero: async (cardId: string) => {
      const { game } = get()
      if (!game) return

      try {
        const updatedGame = await gameService.attackHero(game.id, cardId)
        set({ game: updatedGame, selectedCard: null })
      } catch (error) {
        set({ error: '攻击失败' })
      }
    },

    endTurn: async () => {
      const { game } = get()
      if (!game) return

      try {
        const updatedGame = await gameService.endTurn(game.id)
        set({ game: updatedGame, selectedCard: null })
      } catch (error) {
        set({ error: '回合结束失败' })
      }
    },

    selectCard: (card: Card | null) => {
      set({ selectedCard: card })
    },

    cleanupGame: () => {
      set({ game: null, selectedCard: null, error: null })
    }
  }
}))
