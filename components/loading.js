import { Fragment } from 'react'
import shuffle from 'shuffle-array'

export default function Loading() {

  const loadMsg = [
    '幫緊你...',
    '幫緊你幫緊你...',
    '唔好急...',
    '唔好急唔好急...'
  ]

  shuffle(loadMsg)

  return (
    <Fragment>
      {loadMsg[0]}
    </Fragment>
  )
}
