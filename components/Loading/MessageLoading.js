import { Fragment } from 'react'
import { loadMsg } from '../../config/messages'
import { randomMsg } from '../../lib/dataProcess'

export default function MessageLoading() {

  const message = randomMsg(loadMsg)

  return (
    <Fragment>
      {message}
    </Fragment>
  )
}
