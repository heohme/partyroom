export interface Player {
  id: string
  name: string
  health: number
  mana: number
  maxMana: number
  deck: Card[]
  hand: Card[]
  field: Card[]
  avatar: string
}

export interface Card {
  id: string
  name: string
  cost: number
  type: 'minion' | 'spell' | 'weapon'
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  attack?: number
  health?: number
  description: string
  image: string
  effects?: CardEffect[]
}

export interface CardEffect {
  type: 'battlecry' | 'deathrattle' | 'ongoing'
  effect: (game: Game, source: Card, target?: Card | Player) => void
}

export interface Game {
  id: string
  players: [Player, Player]
  currentTurn: number
  activePlayer: number
  status: 'waiting' | 'playing' | 'ended'
}
