import Container from 'react-bootstrap/Container'
import { Fragment } from 'react'

export default function CustomContainer({ children, style }) {

  return (
    <Fragment>
      <Container style={style} className="shadow-lg p-3 mb-5 bg-white rounded">
        {{ ...children }}
      </Container>
    </Fragment>
  )
}
