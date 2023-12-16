import React from 'react'

const LanguageSwitchButton = () => {
  return (
    <div className=''>
      <select className="border text-xs rounded-3xl block w-full p-1 bg-zinc-800 border-zinc-700 placeholder-zinc-400 text-white focus:ring-blue-500 focus:border-blue-500">
        <option value="EN">EN</option>
        <option value="DE">DE</option>
        <option value="ES">ES</option>
        <option value="JP">JP</option>
      </select>

    </div>
  )
}

export default LanguageSwitchButton