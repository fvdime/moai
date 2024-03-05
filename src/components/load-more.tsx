"use client"

import { fetchPosts } from '@/actions/post.action'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Post, { PostProp } from './feed-props/post'



const LoadMore = () => {

  const { ref, inView } = useInView()
  const [data, setData] = useState<PostProp[]>([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let page = 2;
    if (inView) {
      setIsLoading(true);
      // Add a delay of 500 milliseconds
      const delay = 500;

      const timeoutId = setTimeout(async () => {
        const data = await fetchPosts(page)
        console.log(data)
        setData(d => [...d, ...data]);
        //SetPage(p => p + 1)
        page = page + 1
        setIsLoading(false);
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [inView])


  return (
    <>
      {data.map((item: PostProp, index: number) => (
        <Post key={index} post={item} index={index} />
      ))}
      <section ref={ref}>
        {inView && isLoading && (
          <div className="animate-bounce text-xs font-medium text-white">
            ⠀⠀⣀⠤⠤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡀⠀⠀⠀
            ⠀⢰⠁⠀⠀⠈⢆⠀⠀⠀⠀⠀⠀⠀⢠⠎⠁⠀⠈⡆⠀⠀
            ⠀⢸⠀⠀⠀⠀⠘⡆⠀⠀⠀⠀⠀⡰⠁⠀⠀⠀⠀⡇⠀⠀
            ⠀⢸⠀⠀⢀⡀⠀⠸⡀⠀⠀⠀⢰⠁⢀⠤⡄⠀⢠⠃⠀⠀
            ⠀⠘⡄⠀⡆⠈⢂⠀⠣⡦⠔⠒⠓⣢⡁⢀⠇⢀⠎⠀⠀⠀
            ⠀⠀⠱⡀⠠⠔⠈⠀⠀⠀⠀⠀⠁⠀⠈⠉⠀⡎⠀⠀⠀⠀
            ⠀⠀⢠⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⠀⠀⠀⠀
            ⣀⢄⡇⠀⠀⠀⣀⡀⠀⢀⣀⠀⠀⣀⡀⠀⠀⠈⣆⣀⡀⠀
            ⢸⣒⡀⠀⠀⠀⠀⠀⠀⠘⠛⠂⠀⠀⢀⡀⠀⠀⠔⣚⠇⠀
            ⢠⠃⠀⠀⠀⠈⠐⠢⢀⠀⠀⡠⠔⠈⠁⢀⠄⠀⠈⡦⠒⡄
            ⢠⠀⠀⠀⢍⣢⡤⢤⣴⡧⣴⣳⣤⡐⠮⠐⠀⠀⠀⡁⢉⡹
            ⠈⠢⡀⠀⠀⠀⠠⣊⡰⢠⠣⡴⡓⠀⠀⠀⠀⢀⡴⠓⠒⠁
            ⠀⠀⠀⠉⠐⠒⠐⠒⠊⠁⠒⠚⠒⠒⠒⠈⠉⠁⠀⠀⠀
          </div>
        )}
      </section>
    </>
  )
}

export default LoadMore