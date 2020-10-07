import { Fragment, useEffect, useState } from 'react'
import { getIntentByQuery } from '../lib/getIntentByQuery'
import { setRequestByInput } from '../lib/setQueryByInput'
import Loading from './loading'
import { guessMsg, notFoundMsg } from '../config/messages'
import { randomMsg } from '../lib/dataProcess'

export default function Others({ previousStep, triggerNextStep }) {
  const [message, setMessage] = useState(null)

  const guessMessage = randomMsg(guessMsg)
  const notFoundMessage = randomMsg(notFoundMsg)

  useEffect(() => {
    (async () => {
      const intentData = await getIntentByQuery(previousStep.value)
      const doc = intentData.doc

      let message = doc && doc.label ? guessMessage.replace('[label]', `${doc.label}`) : notFoundMessage
      setMessage(message)

      await setRequestByInput(previousStep.value, intentData.intent)


      if (doc && doc.explanations) {
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
  )
}
