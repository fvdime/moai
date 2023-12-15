import React from 'react'
import LanguageSwitchButton from '../language-switcher'

const Navbar = () => {
  return (
    <div className='mb-12'>
      <nav className="dark:bg-zinc-900 fixed w-full z-20 top-0 start-0 border-b border-zinc-200 dark:border-zinc-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-md font-bold whitespace-nowrap text-white">Moai</span>
        </a>
        <div>
          <button type="button" className="md:hidden text-zinc-400 hover:bg-zinc-700 focus:outline-none focus:ring-4 focus:ring-zinc-700 rounded-lg text-sm p-2.5 me-1">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-zinc-500 dark:text-zinc-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input type="text" className="block w-full py-2 px-4 ps-10 text-xs border rounded-lg bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
            </div>
        </div>
        <div className="flex flex-row items-center gap-4 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="flex text-sm bg-zinc-800 rounded-full md:me-0 focus:ring-4 focus:ring-zinc-600 mr-2">
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
            </button>
            <LanguageSwitchButton/>
        </div>
        </div>
      </nav>
{/* 
DROPDOWN MENU
 <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-zinc-100 rounded-lg shadow dark:bg-zinc-700 dark:divide-zinc-600" id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-zinc-900 dark:text-white">Bonnie Green</span>
          <span className="block text-sm  text-zinc-500 truncate dark:text-zinc-400">name@flowbite.com</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:text-zinc-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:text-zinc-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:text-zinc-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:text-zinc-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
*/}

    </div>
  )
}

export default Navbar