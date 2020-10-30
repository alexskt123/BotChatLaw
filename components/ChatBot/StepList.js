import { Fragment, useEffect, useState } from 'react'
import Badge from 'react-bootstrap/Badge'

import Loading from '../Loading/MessageLoading'

import { getIntentData } from '../../lib/firebaseResult'
import IntentData from '../../lib/data/intentData'
import { getContent } from '../../lib/dataProcess'

import Button from 'react-bootstrap/Button'

import { withTranslation } from '../../config/i18n'

function StepList({ previousStep, triggerNextStep, t, i18n }) {
  const [list, setList] = useState(null)
  const [clicked, setClicked] = useState(false)
  const [stepListRelated, setStepListRelated] = useState(null)

  useEffect(() => {
    (async () => {
      const { language } = i18n
      let intentData = { ...IntentData }

      intentData = previousStep.value

      //use ... to spread everything and avoid object mutation
      const list = [...intentData.doc.list]
        .map(item => {
          const newItem = {
            trigger: 'otherdetail',
            ...item,
            label: getContent(item.label, language)
          }

          return newItem
        })
        .concat(
          t('back', { returnObjects: true }),
          t('others', { returnObjects: true })
        )

      setList(list)
      setStepListRelated(t('stepListRelated'))
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
        value: trigger === 'otherresponse' ? value : intentData
      }

      triggerNextStep(newTrigger)
    }
  }

  return (
    <Fragment>
      <h5><Badge variant="dark">{stepListRelated}</Badge></h5>
      <div style={{ width: 'inherit' }}>
        {list.map((item, idx) => (
          <Button
            key={`${idx}`}
            variant='outline-dark'
            disabled={clicked}
            onClick={() => { handleNextTrigger(item) }}
            style={{ width: '100%' }}
          >
            {item.label}
          </Button>
        ))}
      </div>

    </Fragment>
  )
}

export default withTranslation('stepOptions')(StepList)
