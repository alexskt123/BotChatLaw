import { Fragment, useEffect, useState } from 'react'
import Loading from './loading'

export default function StepMessage({ previousStep, triggerNextStep }) {
  const [message, setMessage] = useState(null)

  useEffect(() => {
    (async () => {
      const doc = previousStep.value

      let message = doc && doc.explanation ? `${doc.explanation}` : '不解釋....'

      if (doc && doc.link && doc.link.length >= 1) {
        triggerNextStep({ trigger: 'otherlink', value: doc })
      }
      else {
        triggerNextStep({ trigger: 'head' })
      }

      setMessage(message)
    })()
  }, [])

  if (!message) return <Loading />

  return (
    <Fragment>
      {message}
    </Fragment>
  );
}
