import { Fragment } from 'react'
import shuffle from 'shuffle-array'
import { loadMsg } from '../config/messages'

export default function Loading() {

  const message = shuffle(loadMsg, { copy: true }).find(x => x)

  return (
    <Fragment>
      {message}
    </Fragment>
  )
}
