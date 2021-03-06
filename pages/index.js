import { useRouter } from 'next/router'
import { useEffect } from 'react'
import PageLoading from '../components/Loading/PageLoading'
import { i18n } from '../config/i18n'
import { nameSpaceConfig } from '../config/nameSpace'
//export default component
export default function CustomStep() {
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

CustomStep.getInitialProps = async () => ({
  namespacesRequired: nameSpaceConfig.index
})
