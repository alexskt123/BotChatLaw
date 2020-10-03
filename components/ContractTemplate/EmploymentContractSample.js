import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Badge from 'react-bootstrap/Badge'
import dateFormat from 'dateformat'

import { Fragment } from 'react'

import SampleItem from '../../components/ContractTemplate/SampleItem'

export default function EmploymentContractSample ({employmentContractSample, height}) {

    
    //const sampleHeight = Element.clientheight > height ? Element.clientheight : height
    
    return (
        <Fragment>
        <Container style={{ height: `${height}px` }}>
          <div className="mt-3">
            <Badge variant="secondary"><h2>僱員合約範例</h2></Badge>
  
          </div>
  
          <Jumbotron className="p-5 mt-3">
            <Container>
              <div>
                <h1>{employmentContractSample.erName}</h1>
                <p className="mt-5">
                  <b>This Contract of employment is made the <SampleItem item={dateFormat(new Date(), 'dS mmmm yyyy')} /></b> between <SampleItem item={employmentContractSample.eeName} /> hereinafter known as 'the Employee', and <SampleItem item={employmentContractSample.erName} />, herein after known as 'the Company'.
                </p>
                <p>
                                  The Employee will be required to sign at the space provided at the end of these conditions, agreeing to adhere to the Company's Conditions of Employment.
                </p>
                <ol style={{ listStyleType: 'lower-roman' }}>
                  <li>Date of Commencement: <SampleItem item={employmentContractSample.startSate} /></li>
                  <li>Job Title: The Employee shall be employed as <SampleItem item={employmentContractSample.jobTitle} /></li>
                  <li>Probationary Period: A Probation period of <SampleItem item={employmentContractSample.probation} /> will be applied.</li>
                  <li>Salary: The Employee's basic salary shall be HK$ <SampleItem item={employmentContractSample.salary} />. Salary shall be reviewed annually. Payment shall be by way of direct debit into the Employee's bank account. Details of such shall be provided by the Employee to the Company upon execution of the contract</li>
                  <li>Annual Leave: In addition to Public Holidays, <SampleItem item={employmentContractSample.annualLeave} /> working days holiday shall be allowed during a full calendar year.</li>
                </ol>
  
                <p className="mt-5">
                                  I agree to be bound by the Conditions of Employment as contained herein.
                </p>
  
                <p>
                                  Signed:
                </p>
                <p>
                                  Date:
                </p>
  
                <p>
                  <b>Signed for and on behalf of the Company</b>
                </p>
                <p>
                                  Signed:
                </p>
                <p>
                                  Date:
                </p>
              </div>
            </Container>
          </Jumbotron>
        </Container>
  
      </Fragment>
    )
}