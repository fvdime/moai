"use client"

import useCreateModal from '@/hooks/useCreateModal'
import React, { useCallback, useState } from 'react'
import Input from '../input'
import Modal from '../modal'
import TextEditor from './text-editor'
import TagInput from './tag-input'

const PostModal = () => {

  const CreateModal = useCreateModal()

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Input
      placeholder='Title'
      type='text'
      />
      <TextEditor/>
      <TagInput/>
    </div>
    )

    const FooterContent = (
      <div className='text-gray-500 text-center mt-4'>
        <p>idk idk idk idk 
        <span 
        className='text-white cursor-pointer hover:underline'>idk</span>
        </p>
      </div>
      )

  return (
    <Modal 
    // disabled={isLoading}
    isOpen={CreateModal.isOpen}
    title='Create Post'
    actionLabel='Post'
    onClose={CreateModal.onClose}
    onSubmit={() => {}}
    body={bodyContent}
    footer={FooterContent}
    />
  )
}

export default PostModal