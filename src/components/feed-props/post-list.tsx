import React from 'react'
import Post from './post'

const PostList = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center gap-y-4'>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

export default PostList