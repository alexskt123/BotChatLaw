import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Badge from 'react-bootstrap/Badge'


import { Fragment } from 'react'

import SampleItem from './SampleItem'
import Disclaimer from '../Disclaimer'

export default function WillSample({ willSample, height }) {

  return (
    <Fragment>
      <Container style={{ height: `${height}px` }}>
        <div className="mt-3">
          <Badge variant="secondary"><h2>遺囑範例</h2></Badge>

        </div>

        <Jumbotron className="p-3 mt-3">
          <Container>
            <div>
              <h1>Sample</h1>
              <div className="mt-3">
                THIS IS THE LAST WILL AND TESTAMENT of me
                <SampleItem item={willSample.testatorName} />,
                Hong Kong ID No <SampleItem item={willSample.testatorID} /> of <SampleItem item={willSample.testatorAddr} />, the Hong Kong Special Administrative Region.
              </div>
              <ol className="mt-3" style={{ listStyleType: 'lower-roman' }}>
                <li className="mt-3">I REVOKE all other Wills and testamentary dispositions made by me.</li>
                <li className="mt-3">I DECLARE that I am domiciled in Hong Kong and that this Will shall be governed by the laws of Hong Kong.</li>
                <li className="mt-3">I WISH my body to be cremated.</li>
                <li className="mt-3">I GIVE THE RESIDUE of my estate both real and personal, immovable or movable, of whatever nature and wherever situated to my Executor UPON TRUST to hold the balance then remaining for such of <SampleItem item={willSample.residue} /></li>

              </ol>
            </div>
          </Container>
        </Jumbotron>
        <Disclaimer />
      </Container>

    </Fragment>
  )
}