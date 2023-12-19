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
      <div className="z-20 absolute right-1 top-12 divide-y divide-zinc-100 rounded-lg shadow w-16 bg-zinc-700">
          <ul className="p-2 text-xs font-bold text-zinc-200">
            <li className='w-full flex flex-row justify-between items-center text-black'>
              <Link href={enHref} locale='en'>EN</Link>
            </li>
            <li>
              <Link href={deHref} locale='de'>DE</Link>
            </li>
            <li>
              <Link href={esHref} locale='es'>ES</Link>
            </li>
            <li>
              <Link href={jaHref} locale='ja'>JP</Link>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default LanguageSwitcherModal