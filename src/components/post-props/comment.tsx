import { GetAllCommentByPost } from '@/services/comment'
import Image from 'next/image'
import React from 'react'

const Comment = async ({id}: any) => {

  // const comment = await GetAllCommentByPost(id)
  
  // console.log(comment)

  return (
    <div>
      <article className="p-4 text-base border-t border-zinc-700">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 font-semibold text-sm text-white">
            <Image
              src="/1.jpg"
              alt='user photo'
              height={24}
              width={24}
              className='w-6 h-6 rounded-full object-cover object-center mr-2'
            />
              some user
            </p> 
            <p className="text-xs text-zinc-400"><time>Jan 16, 15:48</time></p>
          </div>
        </div>
        {/* {comment.map((item) => (
        <div key={item.id}>
          <p className='text-white text-sm'>{item.body}</p>  */}
          {/* <p className="text-xs text-zinc-400 w-full inline-flex items-end justify-end mt-4"><time>Jan 16, 15:48</time></p> */}
        {/* </div>
        ))} */}
        </article>
    </div>
  )
}

export default Comment