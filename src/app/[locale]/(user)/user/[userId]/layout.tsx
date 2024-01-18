import FeedLayout from '@/components/feed-props/feed-layout'
import Navbar from '@/components/feed-props/navbar'
import SettingsModal from '@/components/forms/settings-form';
import { useTranslations } from 'next-intl';
import React from 'react'

export default function UserPageLayout({children}: {children: React.ReactNode}) {

  const t = useTranslations('Index.FeedPage');

  return (
    <div className='bg-zinc-950 min-h-screen'>
      <Navbar 
      Search={t('Navbar.Search')}
      Profile={t('Navbar.Modal.Profile')}
      Settings={t('Navbar.Modal.Settings')}
      Logout={t('Navbar.Modal.Logout')}
      ContactLink={t('Navbar.Modal.ContactLink')}
      SourceLink={t('Navbar.Modal.SourceLink')} />
      <SettingsModal/>
      {children}
    </div>
  )
}