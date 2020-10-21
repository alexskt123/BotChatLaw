import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Badge from 'react-bootstrap/Badge'

import { Fragment } from 'react'

import SampleItem from './SampleItem'
import Disclaimer from '../Disclaimer'
import CustomContainer from '../../components/CustomContainer'

export default function WillSample({ sample, height }) {
  const template = {
    title: '遺囑範例'
  }

  return (
    <Fragment>
      <Head>
        <title>{template.title}</title>
      </Head>

      <CustomContainer style={{ minHeight: height }}>
        <Fragment>
          <div className="mt-0">
            <Badge variant="secondary"><h2>{`${template.title}`}</h2></Badge>

          </div>

          <Jumbotron className="p-1 mt-3">
            <Container>
              <div>
                <h1>Sample</h1>
                <div className="mt-3">
                  THIS IS THE LAST WILL AND TESTAMENT of me
                  <SampleItem item={sample.testatorName} />,
                Hong Kong ID No <SampleItem item={sample.testatorID} /> of <SampleItem item={sample.testatorAddr} />, the Hong Kong Special Administrative Region.
                </div>
                <ol className="mt-3" style={{ listStyleType: 'lower-roman' }}>
                  <li className="mt-3">I REVOKE all other Wills and testamentary dispositions made by me.</li>
                  <li className="mt-3">I DECLARE that I am domiciled in Hong Kong and that this Will shall be governed by the laws of Hong Kong.</li>
                  <li className="mt-3">I WISH my body to be cremated.</li>
                  <li className="mt-3">I GIVE THE RESIDUE of my estate both real and personal, immovable or movable, of whatever nature and wherever situated to my Executor UPON TRUST to hold the balance then remaining for such of <SampleItem item={sample.residue} /></li>

                </ol>
                <div className="mt-3">
                  IN WITNESS whereof I have set my hand to this my Will this [day] of [month] 2020.
                </div>
                <div className="mt-3" style={{ width: '40%' }}>
                  SIGNED by the said <SampleItem item={sample.testatorName} /> and for his or her last Will and Testament
                  in the presence of us both present at the same
                  time who at her request and in her presence and
                  in the presence of each other have hereunto
                </div>
              </div>
            </Container>
          </Jumbotron>
          <Disclaimer />
        </Fragment>
      </CustomContainer>

    </Fragment>
  )
}