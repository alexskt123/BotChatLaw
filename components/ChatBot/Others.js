import { Fragment, useEffect, useState } from 'react'
import { getIntentByQuery } from '../../lib/getIntentByQuery'
import { setRequestByInput } from '../../lib/setQueryByInput'
import Loading from '../Loading/MessageLoading'
import { guessMsg, notFoundMsg, notUseGuessMsg } from '../../config/messages'
import { randomMsg } from '../../lib/dataProcess'
import IntentData from '../../lib/data/intentData'

export default function Others({ previousStep, triggerNextStep }) {
  const [message, setMessage] = useState(null)

  const guessMessage = randomMsg(guessMsg)
  const notFoundMessage = randomMsg(notFoundMsg)

  const getMessage = (intentData) => {
    let message = notFoundMessage
    const {intent, doc} = intentData

    if (doc && doc.label) {
      message = (notUseGuessMsg.find(x => x === `${intent}`)) ? doc.label : guessMessage.replace('[label]', `${doc.label}`)
    }

    return message
  }

  useEffect(() => {
    (async () => {

      let intentData = {...IntentData}

      intentData = await getIntentByQuery(previousStep.value)

      let message = getMessage(intentData)
      setMessage(message)

      await setRequestByInput(previousStep.value, intentData.intent)      

      if (intentData.doc && intentData.doc.explanations) {
        triggerNextStep({ trigger: 'otherdetail', value: intentData })
      }
      else {
        triggerNextStep({ trigger: intentData.trigger })
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
