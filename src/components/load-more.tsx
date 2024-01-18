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

      console.log("burada")

      const timeoutId = setTimeout(() => {
        fetchPosts(page).then((res) => {
          setData(d => [...d, ...res.posts]);
          //SetPage(p => p + 1)
          page = page + 1
        });

        setIsLoading(false);
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [inView])


  return (
    <>
      <section>
        {data.map((item: PostProp, index: number) => (
          <Post key={item.id} post={item} index={index} />
        ))}
      </section>
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