import React from 'react'
import Button from '../button'
import Comment from './comment'

const CommentSection = () => {
  return (
    <section className="my-8 bg-zinc-900 rounded leading-1.5 p-4 border border-zinc-700">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-md font-bold">Discussion (20)</h2>
      </div>
        <form className="mb-6 w-full">
          <div className="py-2 px-4 mb-4 rounded-lg rounded-t-lg border w-full bg-zinc-800 border-zinc-700">
            <label  className="sr-only">Your comment</label>
            <textarea className="px-0 w-full text-sm  border-0 focus:ring-0 text-white placeholder-zinc-400 bg-zinc-800"
            placeholder="Write a comment..." required></textarea>
          </div>
          <div className='flex w-full justify-end'>
            <Button
              label='Post Comment'
            />
          </div>
        </form>
        <Comment/>
    </section>
  )
}

export default CommentSection