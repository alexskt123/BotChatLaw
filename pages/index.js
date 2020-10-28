import { useRouter } from 'next/router'
import { useEffect } from 'react'
import PageLoading from '../components/Loading/PageLoading'
//export default component
export default function CustomStep() {
  // todo: transform i18n
  const i18n = { language: 'en' }

  const { language } = i18n

  const router = useRouter()

  useEffect(() => {
    router.push(`${language}/aboutus`)
  }, [])

  //template
  return (
    <PageLoading />
  )
}
