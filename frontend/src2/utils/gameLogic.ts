import { Game, Card, Player } from '../types/game'
import { GAME_CONFIG } from '../config/gameConfig'

export const gameLogic = {
  canPlayCard: (card: Card, player: Player): boolean => {
    return (
      player.mana >= card.cost &&
      player.hand.some(c => c.id === card.id) &&
      (card.type !== 'minion' || player.field.length < GAME_CONFIG.MAX_FIELD_SIZE)
    )
  },

  canAttack: (attackerId: string, game: Game): boolean => {
    const attacker = game.players[game.activePlayer].field
      .find(card => card.id === attackerId)
    
    return !!attacker && !attacker.hasAttacked && !attacker.isSleeping
  },

  canBeAttacked: (defenderId: string, game: Game): boolean => {
    const defender = game.players[game.activePlayer === 0 ? 1 : 0].field
      .find(card => card.id === defenderId)
    
    return !!defender && !defender.hasStealthEffect
  },

  calculateDamage: (attacker: Card, defender: Card): void => {
    defender.health -= attacker.attack
    attacker.health -= defender.attack
  },

  isGameOver: (game: Game): boolean => {
    return game.players.some(player => player.health <= 0)
  },

  getWinner: (game: Game): number => {
    if (game.players[1].health <= 0) return 0
    if (game.players[0].health <= 0) return 1
    return -1
  },

  drawCard: (player: Player): void => {
    if (player.deck.length === 0) {
      player.health -= player.fatigueDamage
      player.fatigueDamage += 1
      return
    }

    const card = player.deck.pop()
    if (card) {
      if (player.hand.length < GAME_CONFIG.MAX_HAND_SIZE) {
        player.hand.push(card)
      }
    }
  },

  startTurn: (game: Game): void => {
    const currentPlayer = game.players[game.activePlayer]
    currentPlayer.maxMana = Math.min(currentPlayer.maxMana + 1, GAME_CONFIG.MAX_MANA)
    currentPlayer.mana = currentPlayer.maxMana
    gameLogic.drawCard(currentPlayer)
    
    // 重置随从状态
    currentPlayer.field.forEach(card => {
      card.hasAttacked = false
      card.isSleeping = false
    })
  }
}
