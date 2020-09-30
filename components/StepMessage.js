import { Fragment, useEffect, useState } from 'react'
import { getIntentDoc } from '../lib/firebaseResult'
import Loading from './loading'

export default function StepMessage({ previousStep, triggerNextStep }) {
  const [message, setMessage] = useState(null)

  useEffect(() => {
    (async () => {
      let doc

      if (typeof previousStep.value === "string") {
        doc = await getIntentDoc(previousStep.value)
      } else {
        doc = previousStep.value
      }

      console.log({ doc })

      let message = doc && doc.explanation ? `${doc.explanation}` : '不解釋....'

      if (doc && doc.link && doc.link.length >= 1) {
        triggerNextStep({ trigger: 'otherlink', value: doc })
      }
      else if (doc && doc.list && doc.list.length >= 1) {
        triggerNextStep({ trigger: 'otherlist', value: doc })
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
