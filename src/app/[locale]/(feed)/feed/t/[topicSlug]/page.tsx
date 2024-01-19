import FeedLayout from '@/components/feed-props/feed-layout'
import { GetCurrentUser } from '@/services/user'
import React from 'react'

const TopicPage = async () => {

  const currentUser = await GetCurrentUser()
  // console.log("CURRENT USERRRRRRR:::::::::",currentUser)

  return (
    <FeedLayout isUserPage={true} >
       <span className=''>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, est aliquam nesciunt obcaecati repellendus quos numquam eligendi ipsum ab, vitae sapiente ullam illo porro animi cupiditate esse corporis dolorum quaerat.
       </span>
    </FeedLayout>
  )
}

export default TopicPage