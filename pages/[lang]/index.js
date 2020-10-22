import { useRouter } from 'next/router'
import { i18n } from '../../config/i18n'
import { useEffect } from 'react'

import PageLoading from '../../components/Loading/PageLoading'

export default function Fallback() {
  const router = useRouter()

  useEffect(() => {
    router.push(`${i18n.language}/aboutus`)
  }, [])

  //template
  return (
    <PageLoading />
  )
}

Fallback.getInitialProps = async () => ({
  namespacesRequired: ['header', 'settings']
})
