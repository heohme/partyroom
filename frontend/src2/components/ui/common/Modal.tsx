import React from 'react'
import { createPortal } from 'react-dom'
import { Modal as ModalType } from '../../../types/ui'

export default function Modal({ isOpen, title, content, onClose }: ModalType) {
  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="relative bg-white rounded-lg p-6 max-w-lg w-full m-4">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="mb-6">{content}</div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>
    </div>,
    document.body
  )
}
