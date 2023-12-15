import FeedLayout from '@/components/feed-props/feed-layout'
import Navbar from '@/components/feed-props/navbar'
import React from 'react'

export default function UserPageLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='bg-zinc-950'>
      <Navbar/>
      <FeedLayout>
        {children}
      </FeedLayout>
    </div>
  )
}