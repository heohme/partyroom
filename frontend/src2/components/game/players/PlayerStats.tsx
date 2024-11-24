import React from 'react'
import { Player } from '../../../types/game'

interface PlayerStatsProps {
  player: Player
  isOpponent?: boolean
}

export default function PlayerStats({ player, isOpponent = false }: PlayerStatsProps) {
  return (
    <div className="player-stats bg-gray-800 bg-opacity-50 rounded-lg p-3">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-sm">牌库剩余</span>
          <span className="font-bold">{player.deck.length}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm">手牌数量</span>
          <span className="font-bold">{player.hand.length}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm">场上随从</span>
          <span className="font-bold">{player.field.length}</span>
        </div>
        
        {!isOpponent && (
          <div className="flex items-center justify-between">
            <span className="text-sm">回合数</span>
            <span className="font-bold">{Math.floor(player.maxMana)}</span>
          </div>
        )}
      </div>
    </div>
  )
}
