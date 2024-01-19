import FeedLayout from '@/components/feed-props/feed-layout'
import UserPost from '@/components/feed-props/user-post'
import { PostParams, UserParams } from '@/libs/types'
import { GetAllPostsByUser } from '@/services/post'
import { GetUserById } from '@/services/user'
import React from 'react'
import { verifyJwtToken } from '@/libs/auth'
import { cookies } from 'next/headers'

const UserProfilePage = async ({ params, }: any) => {
  const cookieStore = cookies()
  const token: string = cookieStore.get('token')?.value || ""
  const payload = await verifyJwtToken(token)

  const id = params?.userId

  const isOwnPage = payload?.id == id;

  const user = await GetUserById(id)

  const userPosts = await GetAllPostsByUser(id)

  return (
    <FeedLayout isUserPage={true} user={user as UserParams}>
      <div className='flex flex-col items-center justify-center gap-y-4'>
        {userPosts.map((post) => (
          <UserPost user={user as UserParams} post={post as PostParams} key={post.id} isOwnPage={isOwnPage} />
        ))}
      </div>
    </FeedLayout>
  )
}

export default UserProfilePage