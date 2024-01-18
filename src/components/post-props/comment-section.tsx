"use client"

import React from 'react'
import Button from '../button'
import Comment from './comment'
import TextEditor from './text-editor'

const CommentSection = () => {
  return (
    <main className="my-8 bg-zinc-900 rounded leading-1.5 p-4 border border-zinc-700">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-md font-bold">Discussion (20)</h2>
      </div>
      {/* <form className="mb-6 w-full px-4">
        <TextEditor/>
        <div className='flex w-full justify-end mt-2'>
          <Button
            label='Post Comment'
          />
        </div>
      </form> */}
      <Comment/>
    </main>
  )
}

export default CommentSection