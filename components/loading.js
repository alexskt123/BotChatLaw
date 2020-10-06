import { Fragment } from 'react'
import { loadMsg } from '../config/messages'
import { randomMsg } from '../lib/dataProcess'

export default function Loading() {

  const message = randomMsg(loadMsg)

  return (
    <Fragment>
      {message}
    </Fragment>
  )
}
