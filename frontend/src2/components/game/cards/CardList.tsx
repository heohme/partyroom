import React from 'react'
import { Card as CardType } from '../../../types/game'
import Card from '../Card'

interface CardListProps {
  cards: CardType[]
  onCardClick?: (card: CardType) => void
}

export default function CardList({ cards, onCardClick }: CardListProps) {
  return (
    <div className="space-y-4">
      {cards.map((card) => (
        <div 
          key={card.id} 
          className="p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
          onClick={() => onCardClick?.(card)}
        >
          <div className="flex items-center gap-4">
            <div className="w-16">
              <Card card={card} isPlayable={false} />
            </div>
            <div>
              <h3 className="font-bold">{card.name}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-blue-500">{card.cost}费</span>
              {card.type === 'minion' && (
                <>
                  <span className="text-red-500">{card.attack}攻</span>
                  <span className="text-green-500">{card.health}血</span>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
