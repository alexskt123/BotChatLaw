import { Fragment } from 'react'
import { staticMsg } from '../../config/chatBot'

export default function StaticMessage({ step }) {

  return (
    <Fragment>
      <span>{staticMsg[step.id]}</span>
    </Fragment>
  )
}
