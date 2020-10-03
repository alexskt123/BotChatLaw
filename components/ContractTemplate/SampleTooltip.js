import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import { v4 as uuid } from 'uuid'


export default function SampleTooltip({message, target}) {
  return (
    <OverlayTrigger
      key={uuid()}
      placement={'top'}
      overlay={
        <Tooltip id={uuid()}>
          {message}
        </Tooltip>
      }
    >
      <b>{target}</b>
    </OverlayTrigger>
  )
}