import { useRouter } from 'next/router'
import { Router, i18n } from '../../config/i18n'
import { useEffect } from 'react'

import PageLoading from '../../components/Loading/PageLoading'

export default function Fallback() {
  const router = useRouter()
  const { asPath } = router
  const { language, languages } = i18n

  useEffect(() => {
    const { fallback } = router.query
    const possibleLang = fallback?.find(x => x)

    const newPath = languages.includes(possibleLang) ? `/${fallback.join('/')}` : `/${language}${asPath}`

    Router.replace(newPath)
  }, [])

  //template
  return (
    <PageLoading />
  )
}
