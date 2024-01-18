import FeedLayout from '@/components/feed-props/feed-layout'
import UserPost from '@/components/feed-props/user-post'
import { PostParams, UserParams } from '@/libs/types'
import { GetAllPostsByUser } from '@/services/post'
import { GetUserById } from '@/services/user'
import React from 'react'

const UserProfilePage = async ({params}: any) => {

  const id = params?.userId

  const user = await GetUserById(id)

  // console.log(user)

  const userPosts = await GetAllPostsByUser(id)

  console.log(userPosts)

  return (
    <FeedLayout isUserPage={true} user={user as UserParams}>
      <div className='flex flex-col items-center justify-center gap-y-4'>
        {userPosts.map((post) => (
          <UserPost user={user as UserParams} post={post as PostParams} key={post.id}/>
          ))}
      </div>
    </FeedLayout>
  )
}

export default UserProfilePage