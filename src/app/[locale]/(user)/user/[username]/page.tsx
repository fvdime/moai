import UserPost from '@/components/feed-props/user-post'
import React from 'react'

const UserProfilePage = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-y-4'>
      <UserPost/>
      <UserPost/>
      <UserPost/>
    </div>
  )
}

export default UserProfilePage