import React, { useEffect } from 'react'
import { Toast as ToastType } from '../../../types/ui'

export default function Toast({ id, message, type, duration = 3000 }: ToastType) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose?.()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [duration, onClose])

  const typeStyles = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500'
  }

  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
    warning: '⚠'
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className={`
          ${typeStyles[type]}
          fixed top-4 right-4 z-50
          text-white rounded-lg shadow-lg
          flex items-center gap-2 p-4
          min-w-[200px] max-w-[400px]
        `}
      >
        <span className="text-lg">{icons[type]}</span>
        <p className="flex-1">{message}</p>
        <button
          onClick={() => onClose?.()}
          className="text-white hover:text-gray-200"
        >
          ✕
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
