
import { use100vh } from 'react-div-100vh'


import PageLoading from '../components/PageLoading'
import EmploymentContractSample from '../components/ContractTemplate/EmploymentContractSample'


export default function Sample() {

  const employmentContractSample = {

    startSate: '3rd October 2020',
    eeName: 'Chan Tai Man',
    erName: 'God Bless Trump Company',
    jobTitle: 'Analyst',
    probation: '3 months',
    salary: 60000,
    annualLeave: 10
  }

  const height = use100vh()



  if (!height) {
    return <PageLoading />
  }

  return (
    <EmploymentContractSample employmentContractSample={employmentContractSample} height={height}/>
  )
}