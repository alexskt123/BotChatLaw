import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Alert from 'react-bootstrap/Alert'

import { Fragment } from 'react'


export default function SampleTooltip({ id, message, target }) {
  return (
    <Fragment>
      <OverlayTrigger
        key={id}
        placement={'top'}
        overlay={
          <Tooltip id={id}>
            {message}
          </Tooltip>
        }
      >
        <div className="row d-inline-block pl-3" >
          <Alert variant="success" className="p-0 mb-1">
            <b>{target}</b>
          </Alert>
        </div>

      </OverlayTrigger>
    </Fragment>

  )
}