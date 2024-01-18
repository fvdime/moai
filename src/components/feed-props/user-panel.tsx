"use client"

import React, { useCallback } from 'react'
import Button from '../button'
import Image from 'next/image'
import useSettingsModal from '@/hooks/useSettingsModal'


const UserPanel = ({username, profilePic}: any) => {

  const SettingsModal = useSettingsModal()

  const handleClick = useCallback(() => {
    SettingsModal.onOpen()
  }, [SettingsModal])


  return (
    <div className="w-full p-4 border rounded shadow sm:p-8 bg-zinc-800 border-zinc-700 flex flex-col gap-8">
      <div className="flex flex-col items-center justify-between gap-4">
        <Image
          src={process.env.NEXT_PUBLIC_AWS_BUCKET_URL + `${profilePic}`}
          alt='user photo'
          height={96}
          width={96}
          className='w-24 h-24 rounded-full object-cover'
        />
        <p className="text-lg font-semibold text-zinc-100">
          {username}
        </p>
        <Button
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
    </div>
  )
}

export default UserPanel