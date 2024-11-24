import React from 'react'
import { Card as CardType } from '../../../types/game'
import Card from '../Card'

interface CardGridProps {
  cards: CardType[]
  onCardClick?: (card: CardType) => void
}

export default function CardGrid({ cards, onCardClick }: CardGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {cards.map((card) => (
        <div key={card.id} onClick={() => onCardClick?.(card)}>
          <Card card={card} isPlayable={false} />
        </div>
      ))}
    </div>
  )
}
