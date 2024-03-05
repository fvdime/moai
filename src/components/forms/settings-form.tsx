"use client"

import useCreateModal from '@/hooks/useCreateModal'
import React, { useCallback, useEffect, useState } from 'react'
import Input from '../input'
import Modal from '../modal'
import axios from 'axios'
import { error } from 'console'
import { useRouter } from "@/components/navigation-link";
import useSettingsModal from '@/hooks/useSettingsModal'

const SettingsModal = () => {

  const [username, SetUsername] = useState("")
  const [email, SetEmail] = useState("")

  useEffect(() => {
    axios.get("/api/users/getuserbytoken")
      .then((data: any) => {
        if (data?.data?.success == true) {
          SetUsername(data?.data?.user?.username)
          SetEmail(data?.data?.user?.email)
        }
      })
  }, [])


  // const [tag, setTag] = useState<string[]>([])

  const SettingModal = useSettingsModal()

  const bodyContent = (
    <div className='flex flex-col gap-2'>
      <label htmlFor="username" className='text-xs text-white mt-2'>Username</label>
      <Input
        placeholder='Username'
        type='text'
        value={username}
        onChange={(e: any) => SetUsername(e.target.value)}
      />
      {/* <label htmlFor="username" className='text-xs text-white mt-2'>Full Name</label>
      <Input
        placeholder='Username'
        type='text'
        value={title}
        onChange={(e: any) => SetTitle(e.target.value)}
      /> */}
      <label htmlFor="email" className='text-xs text-white mt-2'>Email</label>
      <Input
        placeholder='Email'
        type='email'
        value={email}
        onChange={(e: any) => SetEmail(e.target.value)}
      />
      {/* <label htmlFor="bio" className='text-xs text-white mt-2'>Bio</label>
      <Input
        placeholder='Bio'
        type='text'
        value={title}
        onChange={(e: any) => SetTitle(e.target.value)}
      /> */}
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
      title='Update Your Profile'
      actionLabel='uPDATE'
      onClose={SettingModal.onClose}
      onSubmit={() => {
        axios.post("/api/users/update", { username, email }).then(res => {
          SettingModal.onClose()
        }).catch(err => {
          SettingModal.onClose()
        })
      }}
      body={bodyContent}
      footer={FooterContent}
    />
  )
}

export default SettingsModal