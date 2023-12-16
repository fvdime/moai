import Post from '@/components/feed-props/post'
import React from 'react'

export default async function Feed() {

  return (
    <>
      <div className='flex flex-col items-center justify-center gap-y-4'>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </>
  )
}