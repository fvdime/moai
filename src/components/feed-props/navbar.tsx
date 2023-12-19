"use client"

import React, {useState} from 'react'
import {Link} from '../navigation-link'
import Image from 'next/image'
import LanguageSwitcher from '../language-switcher'

type NavbarProps = {
  Search: string
  Profile: string
  Settings: string
  Logout: string
  ContactLink: string
  SourceLink: string
}

const Navbar = ({Search, Profile, Settings, Logout, ContactLink, SourceLink}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='mb-12'>
      <nav className="dark:bg-zinc-900 fixed w-full z-20 top-0 start-0 border-b border-zinc-200 dark:border-zinc-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-md font-bold whitespace-nowrap text-white">.moai.</span>
        </Link>
        <div>
          <button type="button" className="md:hidden text-zinc-400 hover:bg-zinc-700 focus:outline-none focus:ring-4 focus:ring-zinc-700 rounded-lg text-sm p-2.5 me-1">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-zinc-500 dark:text-zinc-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input type="text" className="block w-full py-2 px-4 ps-10 text-xs border rounded-lg bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder={Search} />
            </div>
        </div>
        <div className="flex flex-row items-center gap-2 md:gap-4 rtl:space-x-reverse">
          <button type="button" className="flex text-sm bg-zinc-800 rounded-full md:me-0 focus:ring-4 focus:ring-zinc-600 mr-2"
          onClick={() => setIsOpen(!isOpen)}
          >
            <Image
              src="/1.jpg"
              alt='user photo'
              height={32}
              width={32}
              className='w-8 h-8 rounded-full object-cover object-center'
            />
          </button>
          {/* <LanguageSwitcher/> */}
          <div>
            <Link href="/feed" locale="en">EN</Link>
            <Link href="/feed" locale="de">DE</Link>
            <Link href="/" locale="en">EN</Link>
            <Link href="/" locale="en">EN</Link>
          </div>
        </div>
        </div>
      </nav>
      { isOpen && 
        <div className="fixed z-50 top-16 right-4 py-1 px-4 rounded shadow-md shadow-slate-800/70 text-base list-none divide-y bg-zinc-800 divide-zinc-700 border border-zinc-500 " >
          <div className="px-4 py-3">
            <span className="block text-sm text-white">Bonnie Green</span>
            <span className="block text-xs font-semibold truncate text-zinc-400">name@flowbite.com</span>
          </div>
          {/* <ul className="py-2 text-xs font-semibold">
            <li>
              <Link href="#" className="block px-4 py-2 hover:bg-zinc-600 text-zinc-200 hover:text-white">{Profile}</Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 hover:bg-zinc-600 text-zinc-200 hover:text-white">{Settings}</Link>
            </li>
            <li>
              <Link href="#" className="block px-4 pt-2 pb-4 hover:bg-zinc-600 text-zinc-200 hover:text-white">{Logout}</Link>
            </li>
            <hr className=''/>
            <li>
              <Link href="#" className="block px-4 pb-2 pt-4 hover:bg-zinc-600 text-zinc-200 hover:text-white">{ContactLink}</Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 hover:bg-zinc-600 text-zinc-200 hover:text-white">{SourceLink}</Link>
            </li>
        </ul> */}
        </div>
      }
    </div>
  )
}

export default Navbar