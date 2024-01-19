"use client"

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const DeleteButton = ({ id }: any) => {

  const router = useRouter()

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/posts/delete/${id}`).then()
      console.log("DELETED")

      router.refresh()

    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {

    return () => {
    }
  }, [])


  return (
    <button onClick={handleDelete}>
      <svg className="w-4 h-4 hover:text-zinc-300 hover:shadow-lg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" fill="currentColor">
        <path d="M20,6H17V5a3,3,0,0,0-3-3H10A3,3,0,0,0,7,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM9,5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V6H9Zm8,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" /><path d="M10,18a1,1,0,0,1-1-1V11a1,1,0,0,1,2,0v6A1,1,0,0,1,10,18Z" /><path d="M14,18a1,1,0,0,1-1-1V11a1,1,0,0,1,2,0v6A1,1,0,0,1,14,18Z" />
      </svg>
    </button>
  )
}

export default DeleteButton