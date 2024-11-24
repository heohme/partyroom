import React from 'react'
import MainLayout from '../components/ui/layout/MainLayout'

export default function Shop() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">商城</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 商品列表 */}
        </div>
      </div>
    </MainLayout>
  )
}
