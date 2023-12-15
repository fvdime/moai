import React from 'react'
import LanguageSwitchButton from './language-switcher'
import Link from 'next/link'

const LandingPage = () => {
  return (
    <div className='h-screen w-full text-gray-50'>
      <header className='w-full p-2 md:p-4 flex justify-between items-center fixed'>
        <div>Moai</div>
        <LanguageSwitchButton/>
      </header>
      <main className='flex flex-row items-center justify-center'>
        <div className='hidden md:flex h-screen md:w-2/5 lg:w-3/5 bg-indigo-950 p-16'>
          something about us
        </div>
        <div className='h-screen w-full lg:w-2/5 bg-zinc-950 p-4 md:p-8 xl:p-12 flex flex-col items-start justify-between'>
          <div className='w-full h-4/5 flex flex-col items-center justify-center gap-8'>
            <span className='uppercase'>Get Started!</span>
            <div className='w-full flex flex-row items-center justify-around'>
              <button className='border-zinc-100 px-12 xl:px-16 py-2 rounded hover:text-zinc-950 hover:bg-zinc-100 font-bold border transition-all duration-500 ease-in'>Log in</button>
              <button className='border-zinc-100 px-12 xl:px-16 py-2 rounded hover:text-zinc-950 hover:bg-zinc-100 font-bold border transition-all duration-500 ease-in'>Register</button>
            </div>
          </div>
          <footer className='w-full flex items-center justify-between text-xs text-gray-300 underline'>
            <Link href="/">Terms</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Privacy</Link>
          </footer>
        </div>
      </main>
    </div>
  )
}

export default LandingPage