
import { use100vh } from 'react-div-100vh'


import PageLoading from '../components/PageLoading'
import EmploymentContractSample from '../components/Template/EmploymentContractSample'

import { useRouter } from "next/router";
import WillSample from '../components/Template/WillSample';

export default function Sample() {

  const height = use100vh()

  const {
    query: { template },
  } = useRouter();

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

  if(template === "EmploymentContract")
    return (
      <EmploymentContractSample employmentContractSample={employmentContractSample} height={height}/>
    )
  else if(template === "Will")
    return (
      <WillSample willSample={willSample} height={height}/>
    )
  else
    return (
      ""
    )
}