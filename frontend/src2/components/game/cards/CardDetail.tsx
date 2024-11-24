import React from 'react'
import { Card as CardType } from '../../../types/game'

interface CardDetailProps {
  card: CardType
}

export default function CardDetail({ card }: CardDetailProps) {
  return (
    <div className="p-4">
      <div className="relative w-64 mx-auto">
        <img 
          src={card.image} 
          alt={card.name}
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">{card.name}</h2>
        <div className="flex items-center gap-4 mt-2">
          <span className="text-blue-500">费用：{card.cost}</span>
          {card.type === 'minion' && (
            <>
              <span className="text-red-500">攻击力：{card.attack}</span>
              <span className="text-green-500">生命值：{card.health}</span>
            </>
          )}
        </div>
        <p className="mt-4 text-gray-600">{card.description}</p>
      </div>
    </div>
  )
}
