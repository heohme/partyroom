import React, { useState, useEffect } from 'react'
import MainLayout from '../components/ui/layout/MainLayout'
import CardGrid from '../components/game/cards/CardGrid'
import CardList from '../components/game/cards/CardList'
import { Card } from '../types/game'
import { cardService } from '../services/cardService'
import Button from '../components/ui/common/Button'

export default function DeckBuilder() {
  const [allCards, setAllCards] = useState<Card[]>([])
  const [selectedCards, setSelectedCards] = useState<Card[]>([])
  const [deckName, setDeckName] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadCards()
  }, [])

  const loadCards = async () => {
    try {
      const cards = await cardService.getCards()
      setAllCards(cards)
    } catch (error) {
      console.error('Failed to load cards:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCardSelect = (card: Card) => {
    if (selectedCards.length >= 30) return
    if (selectedCards.filter(c => c.id === card.id).length >= 2) return
    setSelectedCards([...selectedCards, card])
  }

  const handleCardRemove = (index: number) => {
    const newSelected = [...selectedCards]
    newSelected.splice(index, 1)
    setSelectedCards(newSelected)
  }

  const handleSaveDeck = async () => {
    if (!deckName || selectedCards.length !== 30) return
    try {
      await cardService.createDeck(deckName, selectedCards)
      // 显示成功提示
    } catch (error) {
      // 显示错误提示
    }
  }

  return (
    <MainLayout>
      <div className="container mx-auto p-4">
        <div className="flex gap-4">
          {/* 左侧卡牌列表 */}
          <div className="w-2/3">
            <h2 className="text-xl font-bold mb-4">可用卡牌</h2>
            {loading ? (
              <div>加载中...</div>
            ) : (
              <CardGrid cards={allCards} onCardClick={handleCardSelect} />
            )}
          </div>

          {/* 右侧套牌构建 */}
          <div className="w-1/3">
            <h2 className="text-xl font-bold mb-4">当前套牌 ({selectedCards.length}/30)</h2>
            <input
              type="text"
              value={deckName}
              onChange={(e) => setDeckName(e.target.value)}
              placeholder="输入套牌名称"
              className="w-full p-2 mb-4 border rounded"
            />
            <CardList
              cards={selectedCards}
              onCardClick={(_, index) => handleCardRemove(index)}
            />
            <Button
              onClick={handleSaveDeck}
              disabled={selectedCards.length !== 30 || !deckName}
              className="mt-4 w-full"
            >
              保存套牌
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
