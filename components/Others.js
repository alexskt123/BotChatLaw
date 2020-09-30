import { Fragment, useEffect, useState } from 'react'
import { getIntentByQuery } from '../lib/getIntentByQuery'
import Loading from './loading'
import shuffle from 'shuffle-array'

export default function Others({ previousStep, triggerNextStep }) {
  const [message, setMessage] = useState(null)

  const guessMsg = [
    '我估你嘅意思係:[label]',
    '係咪[label]?',
    '你係咪想搵[label]',
    '[labe]? 輕鬆搵到'
  ]

  const notFoundMsg = [
    '搵唔到....',
    '你噏乜呀?',
    '唔識...',
    '再問遇啦...'
  ]

  shuffle(guessMsg)
  shuffle(notFoundMsg)

  useEffect(() => {
    (async () => {
      const { doc } = await getIntentByQuery(previousStep.value)

      let message = doc && doc.label ? guessMsg[0].replace('[label]', `${doc.label}`) : notFoundMsg[0]
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
