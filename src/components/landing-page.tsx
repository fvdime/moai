import React from 'react'
import { Link } from './navigation-link'
import LanguageSwitcher from './language-switcher'
// import ToastMessage from './toast-message'

type LandingPageProps = {
  AboutUsTitle: string
  AboutUs: string
  Title: string
  LoginButton: string
  RegisterButton: string
  FooterAboutLink: string
  FooterContactLink: string
  FooterSourceLink: string
}

const LandingPage = ({AboutUsTitle, AboutUs, Title, LoginButton, RegisterButton, FooterAboutLink, FooterContactLink, FooterSourceLink}: LandingPageProps) => {
  return (
    <div className='h-screen w-full text-gray-50'>
      <header className='w-full p-2 md:p-4 flex justify-between items-center fixed'>
        <div>.moai.</div>
        <LanguageSwitcher
          enHref={'/'}
          deHref={'/'}
          esHref={'/'}
          jaHref={'/'}
          />
      </header>
      <main className='flex flex-row items-center justify-center'>
        {/* <ToastMessage/> */}
        <div className='hidden md:flex h-screen md:w-2/5 lg:w-3/5 bg-indigo-950 p-16 flex-col items-start justify-center gap-1'>
          <h1 className='text-3xl font-semibold'>
          {AboutUsTitle}
          </h1>
          <p className='font-medium text-lg'>
            {AboutUs}
          </p>
        </div>
        <div className='h-screen w-full lg:w-2/5 bg-zinc-950 p-4 md:p-8 xl:p-12 flex flex-col items-start justify-between'>
          <div className='w-full h-4/5 flex flex-col items-center justify-center gap-8'>
            <span className='uppercase text-xl'>{Title}</span>
            <div className='w-full flex flex-row items-center justify-around gap-4'>
              <Link href={'/login'} className='border-zinc-100 rounded hover:text-zinc-950 hover:bg-zinc-100 font-bold border transition-all duration-500 ease-in w-48 py-2 text-center'>{LoginButton}</Link>
              <Link href={'/register'} className='border-zinc-100 rounded hover:text-zinc-950 hover:bg-zinc-100 font-bold border transition-all duration-500 ease-in w-48 py-2 text-center'>{RegisterButton}</Link>
            </div>
          </div>
          <footer className='w-full flex items-center justify-between text-xs text-gray-300 underline'>
            <Link href="/">{FooterAboutLink}</Link>
            <Link href="/">{FooterContactLink}</Link>
            <Link href="https://github.com/fvdime/moai" target='blank'>{FooterSourceLink}</Link>
          </footer>
        </div>
      </main>
    </div>
  )
}

export default LandingPage