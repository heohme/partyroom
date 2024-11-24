import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold">魔法对决</h3>
            <p className="text-sm text-gray-400">© 2024 All rights reserved</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">关于我们</a>
            <a href="#" className="hover:text-gray-300">服务条款</a>
            <a href="#" className="hover:text-gray-300">隐私政策</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
