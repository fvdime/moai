"use client"

import { fetchPosts } from '@/actions/post.action'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Post, { PostProp } from './feed-props/post'

let page = 2;

const LoadMore = () => {
  const { ref, inView } = useInView()
  const [data, setData] = useState<PostProp[]>([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (inView) {
      setIsLoading(true);
      // Add a delay of 500 milliseconds
      const delay = 500;

      const timeoutId = setTimeout(() => {
        fetchPosts(page).then((res) => {
          setData([...data, ...res]);
          page++;
        });

        setIsLoading(false);
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [inView, data, isLoading])
  

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