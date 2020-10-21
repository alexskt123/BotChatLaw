import { Fragment, useEffect, useState } from 'react'
import { getIntentByQuery } from '../../lib/getIntentByQuery'
import { setRequestByInput } from '../../lib/setQueryByInput'
import Loading from '../Loading/MessageLoading'
import { notUseGuessMsg } from '../../config/messages'
import { randomMsg } from '../../lib/dataProcess'
import IntentData from '../../lib/data/intentData'
import { continueOptions } from '../../config/stepOptions'

import Button from 'react-bootstrap/Button'
import { v4 as uuid } from 'uuid'
import { withTranslation } from '../../config/i18n'

function Others({ previousStep, triggerNextStep, t }) {
  const [message, setMessage] = useState(null)
  const [data, setData] = useState(null)
  const [notGuess, setNotGuess] = useState(null)
  const [clicked, setClicked] = useState(false)

  const guessMessage = randomMsg(t('guessMsg', { returnObjects: true }))
  const notFoundMessage = randomMsg(t('notFoundMsg', { returnObjects: true }))

  const getMessage = (intentData, isNotGuess) => {
    let message = notFoundMessage
    const {doc} = intentData

    if (doc && doc.label) {
      message = (isNotGuess) ? doc.label : guessMessage.replace('[label]', `${doc.label}`)
    }

    return message
  }

  useEffect(() => {
    (async () => {

      let intentData = {...IntentData}      

      intentData = await getIntentByQuery(previousStep.value)

      let isNotGuess = notUseGuessMsg.find(x => x === intentData.intent) || (!(intentData.doc && intentData.doc.label))

      let message = getMessage(intentData, isNotGuess)
      setMessage(message)

      await setRequestByInput(previousStep.value, intentData.intent)        
      
      if (isNotGuess) {
        triggerNextStep({trigger: intentData.trigger})
      }
      
      setData(intentData)
      setNotGuess(isNotGuess)

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
        {!notGuess && continueOptions.map((item, idx) => (          
          <Button
            key={uuid()}
            variant='outline-dark'
            disabled={clicked}
            onClick={() => { handleNextTrigger(item.value) }}
          >
            {t(`stepOptions:continueOptions.${idx}`)}
          </Button>
        ))}
      </div>      
    </Fragment>
  )
}

export default withTranslation(['messages', 'stepOptions'])(Others)
