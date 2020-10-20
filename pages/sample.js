
import { use100vh } from 'react-div-100vh'
import { Fragment } from 'react'

import PageLoading from '../components/Loading/PageLoading'
import EmploymentContractSample from '../components/Template/EmploymentContractSample'

import { useRouter } from 'next/router'
import WillSample from '../components/Template/WillSample'
import { employmentContractDefaultSample, willDefaultSample} from '../config/sampleList'

export default function Sample() {

  const height = use100vh()

  const {
    query: { template, ...values },
  } = useRouter()

  if(!height) return <PageLoading/>  

  const employmentContractSample = {
    ...employmentContractDefaultSample,
    ...values
  }

  const willSample = {
    ...willDefaultSample,
    ...values
  }

  if(template === 'EmploymentContract')
    return (
      <Fragment>        
        <EmploymentContractSample employmentContractSample={employmentContractSample} height={height}/>        
      </Fragment>
    )
  else if(template === 'Will')
    return (
      <Fragment>
        <WillSample willSample={willSample} height={height}/>        
      </Fragment>            
    )
  else
    return (
      <PageLoading/>
    )
}