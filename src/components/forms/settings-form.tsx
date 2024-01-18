"use client"

import useCreateModal from '@/hooks/useCreateModal'
import React, { useCallback, useState } from 'react'
import Input from '../input'
import Modal from '../modal'
import axios from 'axios'
import { error } from 'console'
import { useRouter } from "@/components/navigation-link";
import useSettingsModal from '@/hooks/useSettingsModal'

const SettingsModal = () => {
  const router = useRouter()

  const [title, SetTitle] = useState("")
  const [email, SetEmail] = useState("")
  

  const [tag, setTag] = useState<string[]>([])

  const SettingModal = useSettingsModal()

  const bodyContent = (
    <div className='flex flex-col gap-2'>
      <label htmlFor="username" className='text-xs text-white mt-2'>Username</label>
      <Input
        placeholder='Username'
        type='text'
        value={title}
        onChange={(e: any) => SetTitle(e.target.value)}
      />
      <label htmlFor="username" className='text-xs text-white mt-2'>Full Name</label>
      <Input
        placeholder='Username'
        type='text'
        value={title}
        onChange={(e: any) => SetTitle(e.target.value)}
      />
      <label htmlFor="email" className='text-xs text-white mt-2'>Email</label>
      <Input
        placeholder='Email'
        type='email'
        value={title}
        onChange={(e: any) => SetTitle(e.target.value)}
      />
      <label htmlFor="bio" className='text-xs text-white mt-2'>Bio</label>
      <Input
        placeholder='Bio'
        type='text'
        value={title}
        onChange={(e: any) => SetTitle(e.target.value)}
      />
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
      isOpen={SettingModal.isOpen}
      title='Create Post'
      actionLabel='Post'
      onClose={SettingModal.onClose}
      onSubmit={() => {
        const input: any = document.getElementById("image")
        // console.log(input?.files[0])
        // console.log(title)
        // console.log(tag)
        // console.log(text)
        var resultString = tag.join(',');
        const formData = new FormData()
        formData.append("image", input?.files[0])
        formData.append("title", title)
        axios.post("/api/posts/create", formData).then((res) => {
          console.log(res.data?.success)
          if (res.data?.success) {
            console.log(res?.data?.post?.id)
            // SetTitle("")
            input.value = null
            router.refresh()
            SettingModal.onClose()
          }
        }).catch((err) => {
          console.log(err)
        })
      }}
      body={bodyContent}
      footer={FooterContent}
    />
  )
}

export default SettingsModal