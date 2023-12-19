import React from 'react'
import { Link } from './navigation-link'

type LanguageSwitcherModalProps = {
  enHref: string,
  deHref: string,
  esHref: string,
  jaHref: string
}

const LanguageSwitcherModal = ({enHref, deHref, esHref, jaHref}: LanguageSwitcherModalProps) => {
  return (
    <div>
      <div className="z-20 absolute right-1 md:right-2 top-12 md:top-14 divide-y divide-zinc-100 rounded-lg shadow w-32 bg-zinc-700">
          <ul className="p-2 text-xs font-bold text-zinc-300">
            <li>
              <Link href={enHref} locale='en' className='w-full flex flex-row justify-start gap-1 items-center hover:bg-zinc-600 p-1 rounded mb-1'>
              <span className='border border-zinc-400 rounded-3xl px-1.5 py-0.5'>EN</span>
              <span>English</span>
              </Link>
            </li>
            <li>
              <Link href={deHref} locale='de' className='w-full flex flex-row justify-start gap-1 items-center hover:bg-zinc-600 p-1 rounded mb-1'>
              <span className='border border-zinc-400 rounded-3xl px-1.5 py-0.5'>DE</span>
              <span>Deutsch</span>
              </Link>
            </li>
            <li>
              <Link href={esHref} locale='es' className='w-full flex flex-row justify-start gap-1 items-center hover:bg-zinc-600 p-1 rounded mb-1'>
              <span className='border border-zinc-400 rounded-3xl px-1.5 py-0.5'>ES</span>
              <span>Español</span>
              </Link>
            </li>
            <li>
              <Link href={jaHref} locale='ja' className='w-full flex flex-row justify-start gap-1 items-center hover:bg-zinc-600 p-1 rounded mb-1'>
              <span className='border border-zinc-400 rounded-3xl px-1.5 py-0.5'>JA</span>
              <span>日本語</span>
              </Link>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default LanguageSwitcherModal