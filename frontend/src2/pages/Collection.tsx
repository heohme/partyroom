import React, { useState, useEffect } from 'react'
import { Card } from '../types/game'
import CardGrid from '../components/game/cards/CardGrid'
import CardDetail from '../components/game/cards/CardDetail'
import { cardService } from '../services/cardService'
import Loading from '../components/ui/common/Loading'
import MainLayout from '../components/ui/layout/MainLayout'

export default function Collection() {
  const [cards, setCards] = useState<Card[]>([])
  const [selectedCard, setSelectedCard] = useState<Card | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadCards()
  }, [])

  const loadCards = async () => {
    try {
      const data = await cardService.getCards()
      setCards(data)
    } catch (err) {
      setError('加载卡牌失败')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <Loading />
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        {error}
      </div>
    )
  }

  return (
    <MainLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">我的收藏</h1>
        
        <div className="flex gap-6">
          {/* 卡牌列表 */}
          <div className="flex-1">
            <CardGrid 
              cards={cards}
              onCardClick={setSelectedCard}
            />
          </div>

          {/* 卡牌详情 */}
          {selectedCard && (
            <div className="w-80">
              <CardDetail card={selectedCard} />
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}
