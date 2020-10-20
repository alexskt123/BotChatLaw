
import { use100vh } from 'react-div-100vh'
import { Fragment, createElement } from 'react'

import PageLoading from '../components/Loading/PageLoading'
import EmploymentContractSample from '../components/Template/EmploymentContractSample'

import { useRouter } from 'next/router'
import WillSample from '../components/Template/WillSample'
import { customTemplate } from '../config/sampleList'

export default function Sample() {

  const height = use100vh()

  const {
    query: { template, ...values },
  } = useRouter()

  const components = {
    EmploymentContract: EmploymentContractSample,
    Will: WillSample
  }

  let component

  if(!height) return <PageLoading/>  

  Object.keys(customTemplate)
    .filter(key => key === template)
    .forEach(key => {
      const sample = {
        ...customTemplate[key].defaultSample,
        ... values
      }
      const DynamicComponent = components[key]
      component = createElement(DynamicComponent, {sample, height})
    })

    return (
      <Fragment>
        {component}
      </Fragment>
    )
}