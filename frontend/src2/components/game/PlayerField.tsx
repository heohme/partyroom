import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Player } from '../../types/game'
import Card from './Card'
import { useGameStore } from '../../stores/gameStore'

interface PlayerFieldProps {
  player: Player
  isOpponent?: boolean
  isPlayable?: boolean
}

export default function PlayerField({ player, isOpponent = false, isPlayable = false }: PlayerFieldProps) {
  const { selectedCard, actions } = useGameStore()

  const handleCardClick = (cardId: string) => {
    if (!isPlayable) return
    if (selectedCard) {
      // 处理攻击目标选择
      actions.attackCard(selectedCard.id, cardId)
    }
  }

  return (
    <div className="player-field min-h-[200px] p-4">
      <div className="flex gap-2 justify-center">
        <AnimatePresence>
          {player.field.map((card) => (
            <motion.div
              key={card.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className={`
                ${isPlayable ? 'cursor-pointer' : ''}
                ${selectedCard && !isOpponent ? 'hover:ring-2 hover:ring-yellow-400' : ''}
              `}
              onClick={() => handleCardClick(card.id)}
            >
              <Card
                card={card}
                isOnField
                isOpponent={isOpponent}
                isPlayable={isPlayable && card.canAttack}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
