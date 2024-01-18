import { Link } from '@/components/navigation-link'
import CommentSection from '@/components/post-props/comment-section'
import { SinglePost } from '@/services/post'
import Image from 'next/image'
import React from 'react'
import Parser from 'html-react-parser';
import { JSDOM } from 'jsdom'
import CodeBlock from '@/components/post-props/code-block'


const PostPage = async ({params}: any) => {

  const id = params?.postId

  // console.log(id)

  const postInfo = await SinglePost(id)

  // console.log(postInfo)
  
  const timestamp = postInfo?.createdAt
  const dateObject = new Date(timestamp!);

  const options = { month: 'short', day: '2-digit' } as const;
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(dateObject);

  const formattedTime = `${dateObject.getHours().toString().padStart(2, '0')}:${dateObject.getMinutes().toString().padStart(2, '0')}`;

  // console.log(formattedDate, formattedTime);

  function containsPreTag(htmlString: string) {
    const dom = new JSDOM(htmlString);
    const preTags = dom.window.document.querySelectorAll('pre');

  return preTags.length > 0;
  }

  console.log(containsPreTag(postInfo?.body!))

  return (
    <main className="antialiased text-white">
      <div className="flex justify-between text-white">
        <article className="w-full format format-sm sm:format-base lg:format-lg format-blue format-invert bg-zinc-900 rounded leading-1.5 p-4 border border-zinc-700">
          <div className="mb-4 lg:mb-6 not-format">
            <address className="flex flex-row w-full justify-between items-center mb-6 not-italic">
              <div className='flex flex-row justify-center items-center gap-4'>
                <Link href={`/user/${postInfo?.userId}`}>
                  <Image
                    src="/1.jpg"
                    alt='user photo'
                    height={32}
                    width={32}                      className='w-8 h-8 rounded-full object-cover object-center'
                  />
                </Link>
                <Link href={`/user/${postInfo?.userId}`}>
                  <span className="text-sm font-bold hover:underline">username</span>
                </Link>                    
              </div>
              <span className="text-xs font-normal text-zinc-400">{formattedDate}, {formattedTime}</span>
            </address>
            <h1 className="mb-4 text-xl font-extrabold leading-tight lg:mb-6 lg:text-2xl text-white">{postInfo?.title}</h1>
          </div>
          {containsPreTag(postInfo?.body!) === true ? 
           ( 
            <CodeBlock
            // CodeString={postInfo?.body!}
            />
          ) : 
          (
            <div className='text-sm'>
            {/* <p>{postInfo?.body}</p> */}
            {Parser(postInfo!.body)}
            </div>  
          )
          }
          
          <div className='text-gray-300 text-xs mt-4 flex flex-row items-center gap-2'>
            {postInfo?.hashtags.map((item, index) => (
              <span key={index}>#{item}</span>
              ))}
          </div>
        </article>
      </div>
      <CommentSection id={id}/>
    </main>
  )
}

export default PostPage