import { Fragment, useState, useEffect } from 'react'
import { withTranslation } from '../../config/i18n'

function StaticMessage({ step, triggerNextStep, t, i18n }) {

  const [message, setMessage] = useState('')
  const { language } = i18n

  useEffect(() => {

    setMessage(t(`staticMsg.${step.id}`))

    if (step.id === 'head') {
      triggerNextStep({ trigger: `stageask${language}` })
    }
  }, [])

  return (
    <Fragment>
      <span>{message}</span>
    </Fragment>
  )
}

export default withTranslation('chatBot')(StaticMessage)
