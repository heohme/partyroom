import { canPlayCard, calculateDamage, isGameOver } from '../../utils/gameLogic'

describe('Game Logic', () => {
  describe('canPlayCard', () => {
    it('returns true when player has enough mana', () => {
      const card = { cost: 3, id: '1' } as any
      const player = { mana: 5, hand: [{ id: '1' }] } as any
      expect(canPlayCard(card, player)).toBe(true)
    })

    it('returns false when player does not have enough mana', () => {
      const card = { cost: 5, id: '1' } as any
      const player = { mana: 3, hand: [{ id: '1' }] } as any
      expect(canPlayCard(card, player)).toBe(false)
    })
  })
})
