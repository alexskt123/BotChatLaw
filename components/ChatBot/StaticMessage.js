import { Fragment, useState, useEffect } from 'react'
import { withTranslation } from '../../config/i18n'

function StaticMessage({ step, t }) {

  const [message, setMessage] = useState('')

  useEffect(() => {

    setMessage(t(`staticMsg.${step.id}`))

  }, [])

  return (
    <Fragment>
      <span>{message}</span>
    </Fragment>
  )
}

export default withTranslation('chatBot')(StaticMessage)
