import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md h-screen">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link to="/game" className="block p-2 hover:bg-gray-100 rounded">
              对战模式
            </Link>
          </li>
          <li>
            <Link to="/collection" className="block p-2 hover:bg-gray-100 rounded">
              卡牌收藏
            </Link>
          </li>
          <li>
            <Link to="/deck-builder" className="block p-2 hover:bg-gray-100 rounded">
              卡组构建
            </Link>
          </li>
          <li>
            <Link to="/shop" className="block p-2 hover:bg-gray-100 rounded">
              商城
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
