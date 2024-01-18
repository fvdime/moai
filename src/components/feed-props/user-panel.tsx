import React from 'react'
import Button from '../button'
import Image from 'next/image'
import { UserParams } from '@/libs/types'

const UserPanel = ({username, profilePic}: any) => {
  return (
    <div className="w-full p-4 border rounded shadow sm:p-8 bg-zinc-800 border-zinc-700 flex flex-col gap-8">
      <div className="flex flex-col items-center justify-between gap-4">
        <Image
          src={process.env.AWS_BUCKET_URL + "f137163d-f361-45fe-abf4-5f6660c44e854ce1e73920bd4401018a957ed8824ab62d63f.jpg"}
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
          secondary
          fullWidth
        />
        <Button
          label='Settings'
          fullWidth
        />
      </div>
    </div>
  )
}

export default UserPanel