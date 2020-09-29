import { Fragment, useEffect, useState } from 'react'
import { getIntentByQuery } from '../lib/getIntentByQuery'
import Loading from './loading'

export default function Others({ previousStep, triggerNextStep }) {
  const [message, setMessage] = useState(null)

  useEffect(() => {
    (async () => {
      const { doc } = await getIntentByQuery(previousStep.value)

      let message = doc && doc.label ? `我估你嘅意思係: ${doc.label}` : '搵唔到....'
      setMessage(message)

      if (doc && doc.explanation) {
        triggerNextStep({ trigger: 'otherdetail', value: doc })
      }
      else if (message === 'Bye') {
        triggerNextStep({ trigger: 'tail' })
      }
      else {
        triggerNextStep({ trigger: 'head' })
      }
    })()
  }, [])

  if (!message) return <Loading />

  return (
    <Fragment>
      {message}
    </Fragment>
  );
}
