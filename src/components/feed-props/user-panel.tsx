import React from 'react'
import Button from '../button'
import Image from 'next/image'

const UserPanel = () => {
  return (
    <div className="w-full p-4 border rounded shadow sm:p-8 bg-zinc-800 border-zinc-700 flex flex-col gap-8">
              <div className="flex flex-col items-center justify-between gap-4">
                <Image
                  src="/1.jpg"
                  alt='user photo'
                  height={96}
                  width={96}
                  className='w-24 h-24 rounded-full object-cover'
                />
                <p className="text-lg font-semibold text-zinc-100">
                  UserName
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