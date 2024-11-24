import React from 'react'
import { Player } from '../../../types/game'
import { motion, AnimatePresence } from 'framer-motion'

interface PlayerDeckProps {
  player: Player
  isOpponent?: boolean
}

export default function PlayerDeck({ player, isOpponent }: PlayerDeckProps) {
  const remainingCards = player.deck.length

  return (
    <div className="relative">
      <AnimatePresence>
        {remainingCards > 0 && (
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            exit={{ scale: 0 }}
            className="relative w-24 h-32 bg-purple-800 rounded-lg shadow-lg"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold">{remainingCards}</span>
            </div>
            {/* 卡牌叠加效果 */}
            <div className="absolute inset-0 bg-black opacity-20" />
            <div className="absolute inset-0 border-2 border-gold rounded-lg" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {remainingCards === 0 && (
        <div className="text-red-500 font-bold">
          {isOpponent ? "对手没牌了！" : "你没牌了！"}
        </div>
      )}
    </div>
  )
}
