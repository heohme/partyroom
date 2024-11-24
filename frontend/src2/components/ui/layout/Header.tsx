import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">魔法对决</Link>
        <div className="flex gap-4">
          <Link to="/collection" className="hover:text-primary-600">收藏</Link>
          <Link to="/deck-builder" className="hover:text-primary-600">卡组</Link>
          <Link to="/shop" className="hover:text-primary-600">商店</Link>
          <Link to="/profile" className="hover:text-primary-600">个人</Link>
        </div>
      </nav>
    </header>
  )
}
