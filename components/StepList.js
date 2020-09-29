import { Fragment, useEffect, useState } from 'react'
import Loading from './loading'

import { v4 as uuid } from 'uuid'
import { getIntentDoc } from '../lib/firebaseResult'

export default function StepList({ previousStep, triggerNextStep }) {

  const [list, setList] = useState(null)

  useEffect(() => {
    (async () => {
      const doc = previousStep.value

      let list

      if (doc && doc.list) {
        list = doc.list
      }

      setList(list)
    })()
  }, [])

  if (!list) return <Loading />

  const handleNextTrigger = async ({ trigger, value }) => {
    const intentDoc = await getIntentDoc(value)

    const newTrigger = {
      trigger,
      value: intentDoc
    }

    triggerNextStep(newTrigger)
  }

  return (
    <Fragment>
      <h4>你可能對以下嘅野有興趣:</h4>
      {list.map(item => (
        <button
          key={uuid()}
          style={{ boxShadow: 'rgb(158, 158, 158) 1px 2px 5px' }}
          onClick={() => { handleNextTrigger(item) }}
        >
          {item.label}
        </button>
      ))}
    </Fragment>
  );
}
