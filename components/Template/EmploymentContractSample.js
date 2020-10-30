import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Badge from 'react-bootstrap/Badge'

import dateFormat from 'dateformat'

import { Fragment } from 'react'

import SampleItem from './SampleItem'
import SampleTooltip from './SampleTooltip'
import CustomContainer from '../../components/CustomContainer'
import { withTranslation } from '../../config/i18n'

function EmploymentContractSample({ sample, height, t }) {

  return (
    <Fragment>
      <Head>
        <title>{t('EmploymentContract.label')}</title>
      </Head>

      <CustomContainer style={{ minHeight: height }}>
        <Fragment>
          <div className="mt-0">
            <Badge variant="secondary"><h2>{t('EmploymentContract.label')}</h2></Badge>

          </div>

          <Jumbotron className="p-1 mt-3">
            <Container>
              <div>
                <h1>{sample.erName}</h1>
                <div className="mt-5">
                  <SampleTooltip id="1" message="定義僱員為'the Employee'及定義僱主為'the Company'，方便在此合約內作參考" target="This Contract of employment is made on " />
                  <div className="row d-inline ml-3" >
                    <SampleItem item={dateFormat(new Date(), 'dS mmmm yyyy')} /> between <SampleItem item={sample.eeName} /> hereinafter known as &apos;the Employee&apos;, and <SampleItem item={sample.erName} />, herein after known as &apos;the Company&apos;.
                  </div>
                </div>
                <div className="mt-4">
                  The Employee will be required to sign at the space provided at the end of these conditions,
                  <SampleTooltip id="2" message="僱員簽了合約後，代表已經認同合約內容" target="agreeing to adhere to the Company's Conditions of Employment." />
                </div>
                <ol style={{ listStyleType: 'lower-roman' }}>
                  <li><b>Date of Commencement:</b> <SampleItem item={sample.startSate} /></li>
                  <li><b>Job Title:</b> The Employee shall be employed as <SampleItem item={sample.jobTitle} /></li>
                  <li>
                    <SampleTooltip id="3" message="試用期" target="Probationary Period: " />
                    <div className="row d-inline ml-3" >
                      A Probation period of <SampleItem item={sample.probation} /> will be applied.
                    </div>
                  </li>
                  <li><b>Hours of Work:</b> The hours of work shall be 9.00 am to 6.00 pm, or the hours which may be required from time to time to the perform the role up to a standard and satisfactory level.</li>
                  <li><b>Salary:</b> The Employee&apos;s basic salary shall be HK$ <SampleItem item={sample.salary} />. Salary shall be reviewed annually. Payment shall be by way of direct debit into the Employee&apos;s bank account. Details of such shall be provided by the Employee to the Company upon execution of the contract</li>
                  <li><b>Annual Leave:</b> In addition to Public Holidays, <SampleItem item={sample.annualLeave} /> working days holiday shall be allowed during a full calendar year.</li>
                  <li>
                    <SampleTooltip id="4" message="通知時限：如僱員或僱主想終止合約，需在通知時限內通知另一方。如任一方在少於時限內通知對方（如即時解僱），該一方需作出對應的賠償。" target="Notice Period: " />
                    <div className="row d-inline ml-3" >
                      Termination of employment shall be given by either party following <SampleItem item={sample.noticePeriod} />, or following 1 week if the Employee is under the Probation Period, which must be served on the other party in writing.
                    </div>
                  </li>
                  <li><b>Confidentiality:</b> The Employee will not, during or at any time after the termination of your employment, disclose to any or persons nor use for your own benefit any confidential information that you may receive or obtain in any means in relation to the affairs of the Company or its Clients</li>
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
        </Fragment>
      </CustomContainer>
    </Fragment>
  )
}

export default withTranslation('sampleList')(EmploymentContractSample)