
import { use100vh } from 'react-div-100vh'
import { Fragment } from 'react'

import PageLoading from '../components/PageLoading'
import EmploymentContractSample from '../components/Template/EmploymentContractSample'

import { useRouter } from 'next/router'
import WillSample from '../components/Template/WillSample'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { Copyright, HeaderName } from '../config/aboutUs'

export default function Sample() {

  const height = use100vh()

  const {
    query: { template },
  } = useRouter()

  if(!height) return <PageLoading/>


  const employmentContractSample = {

    startSate: '3rd October 2020',
    eeName: 'Chan Tai Man',
    erName: 'God Bless Trump Company',
    jobTitle: 'Analyst',
    probation: '3 months',
    salary: 60000,
    annualLeave: 10,
    noticePeriod: '1 month'
  }

  const willSample = {
    testatorName: 'Chan Tai Man',
    testatorID: 'Y123456(7)',
    testatorAddr: 'Flat A, Floor 8, King Hill',
    residue: 'sons'
    
  }

  if(template === 'EmploymentContract')
    return (
      <Fragment>
        <Header HeaderName={HeaderName}/>
        <EmploymentContractSample employmentContractSample={employmentContractSample} height={height}/>
        <Footer Copyright={Copyright}/>
      </Fragment>
    )
  else if(template === 'Will')
    return (
      <Fragment>
        <Header HeaderName={HeaderName}/>
        <WillSample willSample={willSample} height={height}/>
        <Footer Copyright={Copyright}/>
      </Fragment>            
    )
  else
    return (
      ''
    )
}