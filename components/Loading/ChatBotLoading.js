import { Fragment } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

export default function ChatBotLoading() {
  return (
    <Fragment>
      <Button variant="dark" disabled>
        <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
        <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
        <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
              Load緊
        <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
        <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
        <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
      </Button>
    </Fragment>

  )
}