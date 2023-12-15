import LandingPage from '@/components/landing-page';
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Index.AuthPage');
  return (
    <>
    <LandingPage/>
  </>
  )
}
