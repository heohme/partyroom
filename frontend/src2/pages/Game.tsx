import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GameBoard from '../components/game/GameBoard'
import { useGameStore } from '../stores/gameStore'
import Loading from '../components/ui/common/Loading'

export default function Game() {
  const navigate = useNavigate()
  const { game, loading, error, actions } = useGameStore()

  useEffect(() => {
    actions.initGame()
    
    return () => {
      actions.cleanupGame()
    }
  }, [])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            游戏加载失败
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            返回主页
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="game-page">
      <GameBoard />
    </div>
  )
}
