import { Fragment } from 'react'
import { randomMsg } from '../../lib/dataProcess'

function MessageLoading() {
  // todo: transform t
  const t = (x) => x

  const message = randomMsg(t('loadMsg', { returnObjects: true }))

  return (
    <Fragment>
      {message}
    </Fragment>
  )
}


// todo: locale:messages
export default MessageLoading
