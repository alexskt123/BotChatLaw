import { Fragment, useEffect, useState } from 'react'
import Badge from 'react-bootstrap/Badge'

import Loading from './loading'

import { v4 as uuid } from 'uuid'
import { getIntentDoc } from '../lib/firebaseResult'

import Button from 'react-bootstrap/Button';

export default function StepList({ previousStep, triggerNextStep }) {

  const [list, setList] = useState(null)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    (async () => {
      const doc = previousStep.value

      let list = []

      if (doc && doc.list) {
        doc.list.forEach(doclist => {
          list.push(
            {
              label: doclist.label,
              value: doclist.value,
              trigger: 'otherdetail'
            }
          )
        }

        )
      }

      list.push(
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



    if (item) {
      const { trigger, value } = item


      const intentDoc = await getIntentDoc(value)

      const newTrigger = {
        trigger,
        value: intentDoc
      }

      setClicked(true)

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
  );
}
