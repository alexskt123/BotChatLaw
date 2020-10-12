import { Fragment } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Copyright, HeaderName } from '../config/aboutUs'

export default function PageLoading() {
  return (
    <Fragment>
      <Header HeaderName={HeaderName} />
      <Container style={{ height: '100vh' }} className="shadow-lg p-3 mb-5 bg-white rounded">
        <Row className="justify-content-center">
          <Button variant="dark" disabled>
            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
              Load緊
          <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
          </Button>
        </Row>
      </Container>
      <Footer Copyright={Copyright} />
    </Fragment>

  )
}