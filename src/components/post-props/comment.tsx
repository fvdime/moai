import Image from 'next/image'
import React from 'react'

const Comment = () => {
  return (
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
            /> some user</p> 
          <p className="text-xs text-zinc-400"><time>Feb 8, 2022</time></p>
        </div>
      </div>
      <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum nesciunt atque accusamus recusandae fugit, saepe eligendi distinctio officia deserunt? Optio fugiat quo dicta consectetur, debitis quasi vero odio voluptates quas?</p>
    </article>
  )
}

export default Comment