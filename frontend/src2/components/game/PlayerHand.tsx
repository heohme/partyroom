import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Player } from '../../types/game'
import Card from './Card'
import { useGameStore } from '../../stores/gameStore'

interface PlayerHandProps {
  player: Player
  isOpponent?: boolean
  isPlayable?: boolean
}

export default function PlayerHand({ player, isOpponent = false, isPlayable = false }: PlayerHandProps) {
  const { game } = useGameStore()

  const canPlayCard = (cardCost: number) => {
    return isPlayable && player.mana >= cardCost
  }

  return (
    <div className="player-hand min-h-[180px] p-4">
      <div className="flex gap-2 justify-center">
        <AnimatePresence>
          {player.hand.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ scale: 0, y: -100 }}
              animate={{ 
                scale: 1, 
                y: 0,
                rotate: (index - (player.hand.length - 1) / 2) * 5
              }}
              exit={{ scale: 0, opacity: 0 }}
              style={{
                transformOrigin: 'bottom'
              }}
            >
              <Card
                card={card}
                isInHand
                isOpponent={isOpponent}
                isPlayable={canPlayCard(card.cost)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
