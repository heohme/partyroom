import React from 'react'
import { motion } from 'framer-motion'
import { Card as CardType } from '../../types/game'
import { useGameStore } from '../../stores/gameStore'
import { soundManager } from '../../utils/sounds'

interface CardProps {
  card: CardType
  isPlayable?: boolean
  isInHand?: boolean
  isOnField?: boolean
  isOpponent?: boolean
  onClick?: () => void
}

export default function Card({ 
  card, 
  isPlayable = false, 
  isInHand = false,
  isOnField = false,
  isOpponent = false,
  onClick 
}: CardProps) {
  const { selectedCard, actions } = useGameStore()
  const isSelected = selectedCard?.id === card.id

  const handleClick = () => {
    if (onClick) {
      onClick()
      return
    }

    if (!isPlayable) return

    soundManager.play('cardSelect')
    actions.selectCard(isSelected ? null : card)
  }

  const cardVariants = {
    hand: {
      hover: {
        y: -30,
        scale: 1.1,
        transition: { duration: 0.2 }
      }
    },
    field: {
      hover: {
        scale: 1.05,
        transition: { duration: 0.2 }
      }
    }
  }

  return (
    <motion.div
      className={`
        relative rounded-lg shadow-xl
        ${isPlayable ? 'cursor-pointer' : 'cursor-default'}
        ${isSelected ? 'ring-2 ring-yellow-400' : ''}
        ${isOpponent ? 'opacity-90' : ''}
      `}
      variants={isInHand ? cardVariants.hand : cardVariants.field}
      whileHover={isPlayable ? "hover" : undefined}
      onClick={handleClick}
    >
      {/* 卡牌背面 - 当是对手的手牌时显示 */}
      {isOpponent && isInHand ? (
        <div className="w-32 h-48 bg-purple-800 rounded-lg flex items-center justify-center">
          <div className="text-gold text-2xl">✦</div>
        </div>
      ) : (
        // 卡牌正面
        <div className="w-32 h-48 bg-white rounded-lg overflow-hidden">
          {/* 卡牌费用 */}
          <div className="absolute top-0 left-0 w-8 h-8 bg-blue-500 rounded-full -translate-x-2 -translate-y-2 flex items-center justify-center">
            <span className="text-white font-bold">{card.cost}</span>
          </div>

          {/* 卡牌图片 */}
          <div className="h-24 bg-gray-200">
            <img 
              src={card.image} 
              alt={card.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* 卡牌信息 */}
          <div className="p-2">
            <h3 className="font-bold text-sm truncate">{card.name}</h3>
            <p className="text-xs text-gray-600 h-12 overflow-hidden">
              {card.description}
            </p>

            {/* 随从属性 */}
            {card.type === 'minion' && (
              <div className="absolute bottom-1 w-full flex justify-between px-4">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{card.attack}</span>
                </div>
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{card.health}</span>
                </div>
              </div>
            )}

            {/* 可攻击标识 */}
            {isOnField && isPlayable && (
              <div className="absolute inset-0 border-2 border-yellow-400 rounded-lg animate-pulse" />
            )}
          </div>
        </div>
      )}

      {/* 可出牌提示 */}
      {isPlayable && isInHand && (
        <div className="absolute inset-0 border-2 border-green-400 rounded-lg animate-pulse" />
      )}

      {/* 特效层 */}
      {card.effects?.map((effect, index) => (
        <div 
          key={index}
          className="absolute inset-0 rounded-lg"
          style={{
            background: `radial-gradient(circle, ${
              effect.type === 'battlecry' ? 'yellow' :
              effect.type === 'deathrattle' ? 'purple' : 'blue'
            }20, transparent 70%)`
          }}
        />
      ))}
    </motion.div>
  )
}
