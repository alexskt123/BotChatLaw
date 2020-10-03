import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Alert from 'react-bootstrap/Alert'

import { v4 as uuid } from 'uuid'
import { Fragment } from 'react'


export default function SampleTooltip({ message, target }) {
    return (
        <Fragment>
            <OverlayTrigger
                key={uuid()}
                placement={'top'}
                overlay={
                    <Tooltip id={uuid()}>
                        {message}
                    </Tooltip>
                }
            >
                <div className="row d-inline-block pl-3" >
                    <Alert variant="success" className="p-1 mb-1">
                        <b>{target}</b>
                    </Alert>
                </div>

            </OverlayTrigger>
        </Fragment>

    )
}