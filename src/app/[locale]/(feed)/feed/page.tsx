import React from 'react'
import Post, { PostProp } from '@/components/feed-props/post'
import { fetchPosts } from '@/actions/post.action'
import LoadMore from '@/components/load-more';
import prisma from '@/libs/prisma';
import { GetAllPost } from '@/services/post';

export default async function Feed() {

  const data = await prisma?.post.findMany({
    take: 6,
    orderBy: { createdAt: "desc" },
    include: {
      user: true
    }
  })



  return (
    <>
      <div className='flex flex-col items-center justify-center gap-y-4'>
        {data.map((item: PostProp, index: number) => (
          <Post key={item.id} post={item} index={index} />
        ))}
        <LoadMore />
      </div>
    </>
  )
}