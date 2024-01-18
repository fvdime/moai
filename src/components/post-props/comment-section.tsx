"use client"

import React, { useState } from 'react'
import Button from '../button'
import Comment from './comment'
import TextEditor from './text-editor'


const CommentSection = ({id}: any) => {
  
  return (
    <div className="my-8 p-6 bg-zinc-900 rounded leading-1.5 border border-zinc-700">
      <h2 className="text-md font-bold mb-4">Discussion</h2>
      <form className="mb-6 w-full">
        <TextEditor/>
        <div className='flex w-full justify-end mt-2'>
          <Button
            label='Post Comment'
          />
        </div>
      </form>
      <Comment id={id}/>
    </div>
  )
}

export default CommentSection