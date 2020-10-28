import { Fragment, useEffect, useState } from 'react'
import { getIntentByQuery } from '../../lib/getIntentByQuery'
import { setRequestByInput } from '../../lib/setQueryByInput'
import Loading from '../Loading/MessageLoading'
import { notUseGuessMsg } from '../../config/messages'
import { randomMsg, getContent } from '../../lib/dataProcess'
import IntentData from '../../lib/data/intentData'
import { continueOptions } from '../../config/stepOptions'

import Button from 'react-bootstrap/Button'
import { withTranslation } from '../../config/i18n'

function Others({ previousStep, triggerNextStep, t, i18n }) {
  const [message, setMessage] = useState(null)
  const [data, setData] = useState(null)
  const [notGuess, setNotGuess] = useState(null)
  const [clicked, setClicked] = useState(false)
  const [continueOptionsLabel, setContinueOptionsLabel] = useState([])

  const getMessage = (intentData, isNotGuess, messages) => {
    let message = messages[1]
    const { doc } = intentData

    if (doc && doc.label) {
      const { language } = i18n
      let translatedMsg = getContent(doc.label, language)
      message = (isNotGuess) ? translatedMsg : messages[0].replace('[label]', `${translatedMsg}`)
    }

    return message
  }

  useEffect(() => {
    (async () => {

      let intentData = { ...IntentData }

      intentData = await getIntentByQuery(previousStep.value)

      let isNotGuess = notUseGuessMsg.find(x => x === intentData.intent) || (!(intentData.doc && intentData.doc.label))

      const guessMessage = randomMsg(t('guessMsg', { returnObjects: true }))
      const notFoundMessage = randomMsg(t('notFoundMsg', { returnObjects: true }))

      let message = getMessage(intentData, isNotGuess, [guessMessage, notFoundMessage])
      setMessage(message)

      await setRequestByInput(previousStep.value, intentData.intent)

      if (isNotGuess) {
        triggerNextStep({ trigger: intentData.trigger })
      }

      setData(intentData)
      setNotGuess(isNotGuess)
      setContinueOptionsLabel(t('stepOptions:continueOptions', { returnObjects: true }))

    })()
  }, [])

  const handleNextTrigger = async (value) => {
    setClicked(true)

    if (value) {
      const intentData = { ...data }
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
            key={`${idx}`}
            variant='outline-dark'
            disabled={clicked}
            onClick={() => { handleNextTrigger(item.value) }}
          >
            {continueOptionsLabel[idx]}
          </Button>
        ))}
      </div>
    </Fragment>
  )
}

export default withTranslation(['messages', 'stepOptions'])(Others)
