import FeedLayout from '@/components/feed-props/feed-layout'
import Navbar from '@/components/feed-props/navbar'
import React from 'react'
import {useTranslations} from 'next-intl';
import PostModal from '@/components/post-props/create-post-modal';


export default function FeedPageLayout({children}: {children: React.ReactNode}) {
  const t = useTranslations('Index.FeedPage');
  return (
    <div className='bg-zinc-950'>
      <Navbar 
      Search={t('Navbar.Search')}
      Profile={t('Navbar.Modal.Profile')}
      Settings={t('Navbar.Modal.Settings')}
      Logout={t('Navbar.Modal.Logout')}
      ContactLink={t('Navbar.Modal.ContactLink')}
      SourceLink={t('Navbar.Modal.SourceLink')} />
      <PostModal/>
      <FeedLayout>
        {children}
      </FeedLayout>
    </div>
  )
}