import { ReactNode } from 'react'
import { Card, Player } from './game'

export interface CardProps {
  card: Card
  isPlayable?: boolean
  isInHand?: boolean
  isOnField?: boolean
  isOpponent?: boolean
  onClick?: () => void
}

export interface PlayerProps {
  player: Player
  isOpponent?: boolean
  isActive?: boolean
}

export interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  loading?: boolean
  icon?: ReactNode
  className?: string
}

export interface InputProps {
  value: string
  onChange: (value: string) => void
  type?: 'text' | 'password' | 'email' | 'number'
  placeholder?: string
  label?: string
  error?: string
  disabled?: boolean
  className?: string
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
  footer?: ReactNode
  width?: number | string
  closable?: boolean
  maskClosable?: boolean
  className?: string
}

export interface ToastProps {
  id: string
  type: 'success' | 'error' | 'info' | 'warning'
  message: string
  duration?: number
  onClose?: () => void
}

export interface LoadingProps {
  size?: 'small' | 'medium' | 'large'
  text?: string
  fullScreen?: boolean
}

export interface LayoutProps {
  children: ReactNode
  header?: boolean
  footer?: boolean
  sidebar?: boolean
  className?: string
}
