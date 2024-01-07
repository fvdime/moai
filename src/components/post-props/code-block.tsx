"use client"

import React, {useState} from 'react'
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = () => {

  const [copy, setCopy] = useState(false)

  const codeString = `const CreatePage = () => {
    return (
      <div className='w-full h-full'>
        <CreatePostModal />
        <div>
          <SyntaxHighlighter language="javascript" style={docco}>
          {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    )
  }
  
  export default CreatePage`;

  return (
    <div className='rounded-md overflow-hidden my-2.5'>
        <div className='flex justify-between px-4 py-1 text-white text-xs items-center bg-gray-600'>
          <p className='text-sm'>Code</p>
          {!copy ? (
            <button
            onClick={() => {
              navigator.clipboard.writeText(codeString)
              setCopy(true)
              setTimeout(() => {
                setCopy(false)
              }, 3000)
            }}
            className='py-1 px-2 flex flex-row justify-between items-center gap-1 rounded-md hover:bg-gray-500 duration-500 transition-all ease-in'>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
              </svg>
              Copied!
            </button>
          ) : (
            <button className='py-1 px-2 flex flex-row justify-between items-center gap-1 rounded-md hover:bg-gray-500 duration-500 transition-all ease-in'>
              <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M5 9V4.13a2.96 2.96 0 0 0-1.293.749L.879 7.707A2.96 2.96 0 0 0 .13 9H5Zm11.066-9H9.829a2.98 2.98 0 0 0-2.122.879L7 1.584A.987.987 0 0 0 6.766 2h4.3A3.972 3.972 0 0 1 15 6v10h1.066A1.97 1.97 0 0 0 18 14V2a1.97 1.97 0 0 0-1.934-2Z"></path>
                    <path d="M11.066 4H7v5a2 2 0 0 1-2 2H0v7a1.969 1.969 0 0 0 1.933 2h9.133A1.97 1.97 0 0 0 13 18V6a1.97 1.97 0 0 0-1.934-2Z"></path>
                  </svg>
                Copy Code
              </button>
            )
          }
        </div>
        <SyntaxHighlighter 
          language="jsx" 
          style={atomOneDark}
          customStyle={{
            padding: "24px"
          }}
          wrapLongLines={true}
          >
        {codeString}
        </SyntaxHighlighter>
      </div>
  )
}

export default CodeBlock