import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '../../stores/gameStore'
import PlayerHand from './PlayerHand'
import PlayerField from './PlayerField'
import PlayerInfo from './PlayerInfo'
import PlayerDeck from './players/PlayerDeck'
import PlayerStats from './players/PlayerStats'
import { soundManager } from '../../utils/sounds'

export default function GameBoard() {
  const { game, selectedCard, actions } = useGameStore()

  useEffect(() => {
    // 初始化游戏
    actions.startGame()
    
    return () => {
      // 清理游戏状态
      actions.cleanupGame()
    }
  }, [])

  if (!game) return null

  const currentPlayer = game.players[game.activePlayer]
  const opponentPlayer = game.players[game.activePlayer === 0 ? 1 : 0]

  const handleFieldClick = () => {
    if (selectedCard) {
      soundManager.play('cardPlay')
      actions.playCard(selectedCard.id)
    }
  }

  return (
    <div className="game-board min-h-screen bg-gradient-to-b from-purple-900 to-purple-600 text-white">
      {/* 对手区域 */}
      <div className="opponent-area p-4">
        <div className="flex justify-between items-center">
          <PlayerInfo player={opponentPlayer} isOpponent />
          <PlayerStats player={opponentPlayer} isOpponent />
          <PlayerDeck player={opponentPlayer} isOpponent />
        </div>
        <PlayerHand player={opponentPlayer} isOpponent />
        <PlayerField player={opponentPlayer} isOpponent />
      </div>

      {/* 中央区域 */}
      <div 
        className="center-area h-32 flex items-center justify-center"
        onClick={handleFieldClick}
      >
        <AnimatePresence>
          {game.status === 'playing' && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="turn-indicator bg-yellow-500 px-4 py-2 rounded-full"
            >
              {game.activePlayer === 0 ? "你的回合" : "对手回合"}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 玩家区域 */}
      <div className="player-area p-4">
        <PlayerField 
          player={currentPlayer} 
          isPlayable={game.activePlayer === 0}
        />
        <PlayerHand 
          player={currentPlayer}
          isPlayable={game.activePlayer === 0}
        />
        <div className="flex justify-between items-center">
          <PlayerInfo player={currentPlayer} />
          <PlayerStats player={currentPlayer} />
          <div className="flex gap-4 items-center">
            <PlayerDeck player={currentPlayer} />
            <button
              onClick={() => actions.endTurn()}
              disabled={game.activePlayer !== 0}
              className={`
                px-4 py-2 rounded-lg font-bold
                ${game.activePlayer === 0
                  ? 'bg-yellow-500 hover:bg-yellow-600'
                  : 'bg-gray-500 cursor-not-allowed'}
              `}
            >
              结束回合
            </button>
          </div>
        </div>
      </div>

      {/* 游戏状态提示 */}
      {game.status === 'ended' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-white text-black p-8 rounded-lg text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              游戏结束
            </h2>
            <p className="text-xl">
              {game.winner === 0 ? "你赢了！" : "对手赢了！"}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              再来一局
            </button>
          </motion.div>
        </div>
      )}
    </div>
  )
}