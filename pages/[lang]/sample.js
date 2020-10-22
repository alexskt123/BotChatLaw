
import { use100vh } from 'react-div-100vh'
import { Fragment, createElement, useEffect } from 'react'

import PageLoading from '../../components/Loading/PageLoading'
import EmploymentContractSample from '../../components/Template/EmploymentContractSample'

import { useRouter } from 'next/router'
import WillSample from '../../components/Template/WillSample'
import { customTemplate } from '../../config/sampleList'

function Sample({ props: { query } }) {
  const { template, ...values } = query

  const components = {
    EmploymentContract: EmploymentContractSample,
    Will: WillSample
  }

  let component

  const height = use100vh()

  const router = useRouter()

  useEffect(() => {
    if (!Object.keys(components).includes(template)) {
      router.push('/samplelist')
    }
  }, [])

  Object.keys(customTemplate)
    .filter(key => key === template)
    .forEach(key => {
      const sample = {
        ...customTemplate[key].defaultSample,
        ...values
      }

      const DynamicComponent = components[key]
      component = createElement(DynamicComponent, { sample, height })
    })

  if (!height) return <PageLoading />

  return (
    <Fragment>
      {component}
    </Fragment>
  )
}

Sample.getInitialProps = async ({ query }) => ({
  namespacesRequired: ['header', 'settings', 'chatBot'],
  props: { query }
})

export default Sample
