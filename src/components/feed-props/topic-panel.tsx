import Link from 'next/link'
import React from 'react'

const TopicPanel = () => {
  return (
    <div className="w-full p-4 border rounded shadow sm:p-8 bg-zinc-800 border-zinc-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-sm font-bold leading-none text-white uppercase">Hot Topics</h5>
        <Link href="#" className="text-xs font-medium hover:underline text-blue-500">
          View all
        </Link>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-zinc-700">
          <li className="py-3 sm:py-4">
          <div className="flex items-center">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium truncate text-white">
                t/Topic Name
              </p>
              </div>
              <div className="inline-flex items-center text-xs font-semibold text-blue-500">
                follow
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
          <div className="flex items-center">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium truncate text-white">
                t/Topic Name
              </p>
              </div>
              <div className="inline-flex items-center text-xs font-semibold text-blue-500">
                follow
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
          <div className="flex items-center">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium truncate text-white">
                t/Topic Name
              </p>
              </div>
              <div className="inline-flex items-center text-xs font-semibold text-blue-500">
                follow
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
          <div className="flex items-center">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium truncate text-white">
                t/Topic Name
              </p>
              </div>
              <div className="inline-flex items-center text-xs font-semibold text-blue-500">
                follow
              </div>
            </div>
          </li>
        </ul>
      </div>     
    </div>
  )
}

export default TopicPanel