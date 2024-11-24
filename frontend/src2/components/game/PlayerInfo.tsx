import React from 'react'
import { motion } from 'framer-motion'
import { Player } from '../../types/game'
import PlayerAvatar from './players/PlayerAvatar'

interface PlayerInfoProps {
  player: Player
  isOpponent?: boolean
}

export default function PlayerInfo({ player, isOpponent = false }: PlayerInfoProps) {
  return (
    <div className="player-info flex items-center gap-4">
      <PlayerAvatar player={player} size="large" />
      
      <div>
        <h3 className="font-bold text-lg">{player.name}</h3>
        <div className="flex gap-4 mt-1">
          <motion.div 
            className="health flex items-center gap-1"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-red-500">❤</span>
            <span>{player.health}</span>
          </motion.div>
          
          <motion.div 
            className="mana flex items-center gap-1"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-blue-500">💎</span>
            <span>{player.mana}/{player.maxMana}</span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
