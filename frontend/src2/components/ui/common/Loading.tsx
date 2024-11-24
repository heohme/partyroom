import React from 'react'

export default function Loading({ 
  size = 'medium', 
  text = '加载中...', 
  fullScreen = false 
}: LoadingProps) {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  }

  const spinner = (
    <div className="flex flex-col items-center gap-2">
      <div 
        className={`
          ${sizeClasses[size]}
          border-4 border-gray-200 border-t-blue-500
          rounded-full animate-spin
        `}
      />
      {text && <span className="text-gray-600">{text}</span>}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
        {spinner}
      </div>
    )
  }

  return spinner
}
