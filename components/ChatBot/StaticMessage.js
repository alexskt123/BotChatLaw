import { Fragment, useState, useEffect } from 'react'

function StaticMessage({ step, triggerNextStep }) {
  // todo: transform t
  const t = (x) => x
  // todo: transform i18n
  const i18n = { language: 'en' }

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

// todo: locale:chatBot
export default StaticMessage
