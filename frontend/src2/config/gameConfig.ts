export const GAME_CONFIG = {
  INITIAL_HEALTH: 30,
  INITIAL_MANA: 1,
  MAX_MANA: 10,
  MAX_HAND_SIZE: 10,
  MAX_FIELD_SIZE: 7,
  CARDS_PER_TURN: 1,
}

export const CARD_TYPES = {
  MINION: 'minion',
  SPELL: 'spell',
  WEAPON: 'weapon',
} as const

export const CARD_RARITIES = {
  COMMON: 'common',
  RARE: 'rare',
  EPIC: 'epic',
  LEGENDARY: 'legendary',
} as const
