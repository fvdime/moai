"use client"

import React, { useEffect, useCallback  } from 'react'
import Button from '../button'
import Image from 'next/image'
import { UserParams } from '@/libs/types'
import { useState, useRef } from 'react'
import toast, { Toaster } from "react-hot-toast"
import axios from 'axios'
import useUserState from '@/hooks/useUserState'
import useSettingsModal from '@/hooks/useSettingsModal'

const UserPanel = ({ username, profilePic }: any) => {

  const SettingsModal = useSettingsModal()

  const handleClick = useCallback(() => {
    SettingsModal.onOpen()
  }, [SettingsModal])

  
  const image: any = useUserState((state) => state.image)
  const setImage: any = useUserState((state) => state.setImage)

  console.log(profilePic)

  // const [image, SetImage] = useState(profilePic);
  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    //@ts-ignore
    fileInputRef?.current?.click();
  };

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    const formData = new FormData();
    formData.append('image', selectedFile);
    toast.success('Loading, Please wait.')
    axios
      .post('/api/users/profileimage', formData)
      .then((res: any) => {
        if (res.data?.success) {
          setImage(res.data?.user?.profileImage)
          toast.success('Successfully!')
        } else {
          toast.error('Process Error')
        }
      })
      .catch((err: any) => {
        toast.error('Process Error')
      });
  };
  
  return (
    <div className="w-full p-4 border rounded shadow sm:p-8 bg-zinc-800 border-zinc-700 flex flex-col gap-8">
      <div className="flex flex-col items-center justify-between gap-4">
        <Image
          src={image ? process.env.NEXT_PUBLIC_AWS_BUCKET_URL + `${profilePic}` : "/1.jpg"}
          alt='user photo'
          height={96}
          width={96}
          className='w-24 h-24 rounded-full object-cover'
        />
        <p className="text-lg font-semibold text-zinc-100">
          {username}
        </p>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
          accept="image/png, image/jpeg, image/jpg"
        />
        <Button
          onClick={handleButtonClick}
          label='Change Profile Pic'
          secondary
          fullWidth
        />
      </div>
      <hr />
      <div className="flex flex-col gap-2">
        <Button
          label='Settings'
          fullWidth
          onClick={handleClick}
        />
      </div>
      <Toaster position="top-right"
        reverseOrder={false} />
    </div>
  )
}

export default UserPanel