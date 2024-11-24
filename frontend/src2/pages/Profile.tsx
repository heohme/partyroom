import React from 'react'
import MainLayout from '../components/ui/layout/MainLayout'

export default function Profile() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">个人资料</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* 个人资料内容 */}
        </div>
      </div>
    </MainLayout>
  )
}
