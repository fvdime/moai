import Link from "next/link";
import React from "react";

const FeedLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <>
       <div className="max-w-screen-lg mx-auto">
        <div className="w-full flex flex-row justify-between lg:gap-4 pt-4 h-full">
          <div className="h-full w-full px-4 flex flex-col gap-4 overflow-y-auto rounded-lg">
            {children}
          </div>
          <div className="hidden w-2/5 h-full lg:flex lg:flex-col gap-4">
            <div>
                <div className="w-full p-4 border rounded-lg shadow sm:p-8 bg-zinc-800 border-zinc-700">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-sm font-bold leading-none text-white uppercase">Hot Topics</h5>
                        <a href="#" className="text-xs font-medium hover:underline text-blue-500">
                            View all
                        </a>
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
                        </ul>
                </div>
            </div>
                
            </div>
            <div>
                <div className="w-full p-4 border rounded-lg shadow sm:p-8 bg-zinc-800 border-zinc-700">
                    <div className="flex flex-col items-start justify-between mb-4 gap-4">
                        <h5 className="text-sm font-bold leading-none text-white uppercase">Home</h5>
                        <a href="#" className="text-xs font-medium text-zinc-300">
                            create or idk some long information
                        </a>
                </div>
                
                <div className="flex flex-col gap-2">
                    <button className='border-zinc-100 w-full py-1 rounded-3xl bg-zinc-100 
                    font-bold border transition-all text-sm'>Create Post</button>
                    <button className='border-zinc-100 w-full text-zinc-100 text-sm py-1 rounded-3xl hover:text-zinc-950 font-bold border'>Create Topic</button>
                </div>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeedLayout