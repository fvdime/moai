import React from 'react'
import Button from '../button'
import CreatePostModal from '../forms/create-post'

const HomePanel = () => {
  return (
    <div className="w-full p-4 border rounded shadow sm:p-8 bg-zinc-800 border-zinc-700">
              <div className="flex flex-col items-start justify-between mb-4 divide-y divide-zinc-400">
                <h5 className="text-sm font-bold leading-none text-white uppercase pb-2">
                  Home
                </h5>
                <p className="text-xs font-medium text-zinc-300 pt-2">
                  create or idk some long information
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <CreatePostModal/>
                <Button
                  label='Create Topic'
                  fullWidth
                /> 
              </div>  
            </div>
  )
}

export default HomePanel