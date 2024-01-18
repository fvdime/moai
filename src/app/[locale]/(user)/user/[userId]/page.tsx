import FeedLayout from '@/components/feed-props/feed-layout'
import UserPost from '@/components/feed-props/user-post'
import { UserParams } from '@/libs/types'
import { GetUserById } from '@/services/user'
import React from 'react'

const UserProfilePage = async ({params}: any) => {

  const id = params?.userId

  const user = await GetUserById(id)

  // console.log(user)

  return (
    <FeedLayout isUserPage={true} user={user as UserParams}>
      <div className='flex flex-col ic justify-center gap-y-4'>
        <UserPost/>
        <UserPost/>
        <UserPost/>
      </div>
    </FeedLayout>
  )
}

export default UserProfilePage