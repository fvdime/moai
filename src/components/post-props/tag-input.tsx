"use client"

import React, { useState } from 'react'


const TagInput = () => {

  const [tagValue, setTagValue] = useState<string>("")
  const [tag, setTag] = useState<string[]>([])

  const addTags = (e: any) => {
    if (e.keyCode === 13 && tagValue) {
      setTag([...tag, tagValue])
      setTagValue("")
    }
  }

  const handleRemove = (indexToRemove: any) => {
    setTag(tag.filter((_, index) => index !== indexToRemove))
  }

  return (
    <div className='flex flex-col gap-4'>
      <input 
        type="text"
        id='tag-input'
        placeholder='#Tag'
        className="block w-full px-2.5 py-1.5 ps-4 text-sm text-white border border-zinc-600 rounded-full bg-zinc-700 focus:ring-blue-500 focus:border-blue-500" 
        value={tagValue}
        onChange={(e) => setTagValue(e.target.value)}
        onKeyUp={addTags}
      />
      <ul className='flex flex-row gap-2'>
        {tag.map((item, index) => (
        <li key={index} className='flex flex-row justify-center items-center gap-2 border py-0.5 px-2 rounded-md bg-blue-500 border-blue-400 flex-wrap'>
          <span className='text-sm text-white'>{item}</span>
          <button onClick={() => handleRemove(index)}>
            <svg className="w-2 h-2 text-white" aria-hidden="true"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
          </button>
        </li> 
        ))}
      </ul>
    </div>
  )
}

export default TagInput