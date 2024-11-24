import React from 'react'
import { Player } from '../../../types/game'

interface PlayerAvatarProps {
  player: Player
  isActive?: boolean
  size?: 'small' | 'medium' | 'large'
}

export default function PlayerAvatar({ player, isActive = false, size = 'medium' }: PlayerAvatarProps) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  }

  return (
    <div className={`relative rounded-full overflow-hidden ${sizeClasses[size]}`}>
      <img
        src={player.avatar}
        alt={player.name}
        className="w-full h-full object-cover"
      />
      {isActive && (
        <div className="absolute inset-0 ring-2 ring-yellow-400 ring-offset-2 rounded-full" />
      )}
    </div>
  )
}
