import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedEffectProps {
  type: 'damage' | 'heal' | 'buff' | 'debuff'
  value: number
  position: { x: number; y: number }
}

export default function AnimatedEffect({ type, value, position }: AnimatedEffectProps) {
  const variants = {
    damage: {
      color: 'text-red-500',
      animation: {
        y: -50,
        opacity: [1, 0],
        scale: [1, 1.2, 1],
      }
    },
    heal: {
      color: 'text-green-500',
      animation: {
        y: -30,
        opacity: [1, 0],
        scale: [1, 1.2, 1],
      }
    },
    buff: {
      color: 'text-yellow-500',
      animation: {
        y: -20,
        opacity: [1, 0],
        scale: [1, 1.1, 1],
      }
    },
    debuff: {
      color: 'text-purple-500',
      animation: {
        y: -20,
        opacity: [1, 0],
        scale: [1, 0.9, 1],
      }
    }
  }

  return (
    <motion.div
      className={`absolute font-bold ${variants[type].color}`}
      style={{ x: position.x, y: position.y }}
      animate={variants[type].animation}
      transition={{ duration: 0.5 }}
    >
      {value > 0 ? `+${value}` : value}
    </motion.div>
  )
}
