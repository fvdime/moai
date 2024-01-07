import Image from "next/image";
import React from "react";
import CodeBlock from "../post-props/code-block";

const Post = () => {
  return (
    <div className="
    w-full">   
      <div className="flex items-start gap-2.5">
        <Image
          src="/1.jpg"
          alt='user photo'
          height={32}
          width={32}
          className='w-8 h-8 rounded-full object-cover'
          />
        <div className="flex flex-col gap-1 w-full">
            <div className="flex flex-col w-full leading-1.5 p-4 border border-zinc-700 rounded-e-xl rounded-es-xl bg-zinc-800 hover:border-zinc-500 ease-in transition-all duration-500">
              <div className="flex items-center justify-between space-x-2 rtl:space-x-reverse mb-2">
                  <div className="text-xs font-bold">
                    <span className="text-white">t/topic name</span>
                    <span className="text-zinc-400"> - username</span>
                  </div>
                  <span className="text-xs font-normal text-zinc-400">11:46</span>
              </div>
              <p className="text-md font-semibold text-white">This is the title</p>
              <div className="w-full h-96 relative my-2.5">
                  <Image 
                  src="/1.jpg" 
                  className="rounded object-cover object-center absolute"
                  fill
                  alt="post image"
                  />
              </div>
              <div className="w-full flex items-center justify-between">
                <div className="flex gap-2 text-white">
                  <button>
                    <svg className="w-4 h-4 hover:text-sky-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
                    </svg>
                  </button>
                  <span className="text-xs">45</span>
                  <button>
                    <svg className="w-4 h-4 hover:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                    </svg>
                  </button>
                </div>
                <div className="flex gap-2 text-white">
                  <button>
                  <svg className="w-4 h-4 hover:text-zinc-200 hover:shadow-lg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
                        <path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor"/>
                        <path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor"/>
                    </svg>
                  </button>
                  <button>
                    <svg className="w-4 h-4 hover:text-zinc-200 hover:shadow-lg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" fill="currentColor">
                      <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z" fill="currentColor"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
      
     <div className="flex items-start gap-2.5 mt-4">
        <Image
          src="/1.jpg"
          alt='user photo'
          height={32}
          width={32}
          className='w-8 h-8 rounded-full object-cover object-center'
        />
        <div className="flex flex-col w-full leading-1.5 p-4 border border-zinc-700 rounded-e-xl rounded-es-xl bg-zinc-800 hover:border-zinc-500 ease-in transition-all duration-500">
            <div className="flex items-center justify-between space-x-2 rtl:space-x-reverse mb-2">
              <div className="text-xs font-bold">
                <span className="text-white">t/topic name</span>
                <span className="text-zinc-400"> - username</span>
              </div>
              <span className="text-xs font-normal text-zinc-400">11:46</span>
              </div>
              <p className="text-md font-semibold text-white">This is the title</p>
            <CodeBlock/>
        </div>
      </div>
    </div>
  );
};

export default Post;