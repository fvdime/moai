import LandingPage from '@/components/landing-page';
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Index.LandingPage');
  return (
    <>
      <LandingPage
      AboutUsTitle={t('AboutUsTitle')}
      AboutUs={t('AboutUs')}
      Title={t('Title')}
      LoginButton={t('LoginButton')}
      RegisterButton={t('RegisterButton')}
      FooterAboutLink={t('FooterAboutLink')}
      FooterContactLink={t('FooterContactLink')}
      FooterSourceLink={t('FooterSourceLink')}
      />
    </>
  )
}
