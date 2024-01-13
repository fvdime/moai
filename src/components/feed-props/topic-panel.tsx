"use server"

import prisma from '@/libs/prisma'
import Link from 'next/link'
import React from 'react'

// const getTopTopics = async () => {
//   const currentDateMinusOneDay = new Date();
//   currentDateMinusOneDay.setDate(currentDateMinusOneDay.getDate() - 1)

//   const result = await prisma.topic.findMany({
//     select: {
//       id: true,
//       title: true,
//       posts: {
//         select: {
//           id: true
//         },
//         where: {
//           createdAt: {
//             gte: currentDateMinusOneDay
//           }
//         }
//       }
//     },
//     orderBy: {
//       posts: {
//         _count: "desc"
//       }
//     },
//     take: 5
//   })

//   return result.map(x => {
//     return {
//       id: x.id,
//       title: x.title
//     }
//   })
// }

const TopicPanel = async () => {
  // const topics = await getTopTopics();
  const topics = [{ id: 1, title: "deneme" }, { id: 2, title: "deneme" }]
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
          {
            topics.map(item => (<li className="py-3 sm:py-4" key={item.id}>
              <div className="flex items-center">
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium truncate text-white">
                    t/{item.title}
                  </p>
                </div>
                <button className="inline-flex items-center text-xs font-semibold text-blue-500">
                  follow
                </button>
              </div>
            </li>)
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default TopicPanel