import { Fragment } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import LoadingSpinner from './LoadingSpinner'

export default function PageLoading() {
  return (
    <Fragment>
      <Container style={{ height: '100vh' }} className="shadow-lg p-3 mb-5 bg-white rounded">
        <Row className="justify-content-center">
          <LoadingSpinner />
        </Row>
      </Container>
    </Fragment>

  )
}