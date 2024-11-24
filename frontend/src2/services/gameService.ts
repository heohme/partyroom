import { Game, Card } from '../types/game'

export const gameService = {
  joinGame: async (): Promise<Game> => {
    // TODO: 实现加入游戏逻辑
    throw new Error('Not implemented')
  },

  playCard: async (gameId: string, cardId: string, targetId?: string): Promise<void> => {
    // TODO: 实现出牌逻辑
    throw new Error('Not implemented')
  },

  endTurn: async (gameId: string): Promise<void> => {
    // TODO: 实现回合结束逻辑
    throw new Error('Not implemented')
  }
}
