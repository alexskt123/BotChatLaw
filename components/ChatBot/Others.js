import { Fragment, useEffect, useState } from 'react'
import { getIntentByQuery } from '../../lib/getIntentByQuery'
import { setRequestByInput } from '../../lib/setQueryByInput'
import Loading from '../Loading/MessageLoading'
import { guessMsg, notFoundMsg, notUseGuessMsg } from '../../config/messages'
import { randomMsg } from '../../lib/dataProcess'
import IntentData from '../../lib/data/intentData'
import { continueOptions } from '../../config/stepOptions'

import Button from 'react-bootstrap/Button'
import { v4 as uuid } from 'uuid'

export default function Others({ previousStep, triggerNextStep }) {
  const [message, setMessage] = useState(null)
  const [data, setData] = useState(null)
  const [clicked, setClicked] = useState(false)

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
      
      setData(intentData)

    })()
  }, [])

  const handleNextTrigger = async (value) => {
    setClicked(true)

    if (value) {
      const intentData = {...data}
      let trigger
      let newTrigger 

      if (value === 'yes') {
        if (intentData.doc && intentData.doc.explanations) {
          trigger = 'otherdetail'
        }
        else {
          trigger = intentData.trigger
        }
        
        newTrigger = {
          trigger,
          value: intentData
        }      
      }
      else {
        trigger = 'other'

        newTrigger = {
          trigger,
          value: null
        }
      }


      triggerNextStep(newTrigger)
    }
  }  

  if (!message) return <Loading />

  return (
    <Fragment>
      {message}
      <div>
        {continueOptions.map(item => (
          <Button
            key={uuid()}
            variant='outline-dark'
            disabled={clicked}
            onClick={() => { handleNextTrigger(item.value) }}
          >
            {item.label}
          </Button>
        ))}
      </div>      
    </Fragment>
  )
}
