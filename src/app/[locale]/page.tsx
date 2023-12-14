import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Index.AuthPage');
  return (
    <div>
    <h1>{t('LoginHeader')}</h1>
  </div>
  )
}
