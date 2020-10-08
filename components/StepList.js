import { Fragment, useEffect, useState } from 'react'
import Badge from 'react-bootstrap/Badge'

import Loading from './loading'

import { v4 as uuid } from 'uuid'
import { getIntentData } from '../lib/firebaseResult'
import IntentData from '../lib/data/intentData'

import Button from 'react-bootstrap/Button'

export default function StepList({ previousStep, triggerNextStep }) {
  const [list, setList] = useState(null)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    (async () => {
      let intentData = {...IntentData}

      intentData = previousStep.value

      //use ... to spread everything and avoid object mutation
      const list = [...intentData.doc.list]
        .map(item => {
          const newItem = {
            ...item,
            trigger: 'otherdetail'
          }

          return newItem
        })
        .concat(
          {
            label: '返回',
            value: 'head',
            trigger: 'head'
          }
        )

      setList(list)
    })()
  }, [])

  if (!list) return <Loading />

  const handleNextTrigger = async (item) => {
    setClicked(true)

    if (item) {
      const { trigger, value } = item

      let intentData = IntentData
      intentData = await getIntentData(value)

      const newTrigger = {
        trigger,
        value: intentData
      }

      triggerNextStep(newTrigger)
    }
  }

  return (
    <Fragment>
      <h5><Badge variant="dark">你可能對以下嘅野有興趣</Badge></h5>
      <div>
        {list.map(item => (
          <Button
            key={uuid()}
            variant='outline-dark'
            disabled={clicked}
            onClick={() => { handleNextTrigger(item) }}
          >
            {item.label}
          </Button>
        ))}
      </div>

    </Fragment>
  )
}
