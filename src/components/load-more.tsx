"use client"

import { fetchPosts } from '@/actions/post.action'
import React, { useCallback, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Post, { PostProp } from './feed-props/post'



const LoadMore = () => {

  const { ref, inView } = useInView()
  const [data, setData] = useState<PostProp[]>([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let page = Number(document.getElementById("page")?.innerHTML) || 2
    console.log(page)
    if (inView) {
      setIsLoading(true);
      const delay = 500;
      const timeoutId = setTimeout(async () => {
        const newData = await fetchPosts(page, 6);
        console.log(newData)
        setData(prevData => [...prevData, ...newData]);
        setIsLoading(false);
      }, delay);

      // @ts-ignore
      document.getElementById("page").innerHTML = String(page + 1 || 2)

      return () => clearTimeout(timeoutId);
    }
  }, [inView]);

  return (
    <>
      {data.map((item: PostProp, index: number) => (
        <Post key={index} post={item} index={index} />
      ))}
      <section ref={ref}>
        {inView && isLoading && (
          <div className="animate-bounce text-xs font-medium text-white w-24">
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
      <div className='hidden' id="page">2</div>
    </>
  )
}

export default LoadMore