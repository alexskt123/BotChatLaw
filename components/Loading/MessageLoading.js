import { Fragment } from 'react'
import { withTranslation } from '../../config/i18n'
import { randomMsg } from '../../lib/dataProcess'

function MessageLoading({t}) {

  const message = randomMsg(t('loadMsg', { returnObjects: true }))

  return (
    <Fragment>
      {message}
    </Fragment>
  )
}

export default withTranslation('messages')(MessageLoading)
