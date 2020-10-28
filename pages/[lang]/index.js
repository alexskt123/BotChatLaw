import { useRouter } from 'next/router'
import { useEffect } from 'react'

import PageLoading from '../../components/Loading/PageLoading'

export default function Fallback() {
  const router = useRouter()

  useEffect(() => {
    router.push('/aboutus')
  }, [])

  //template
  return (
    <PageLoading />
  )
}
