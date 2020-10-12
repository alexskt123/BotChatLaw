import { Fragment, useEffect, useState } from 'react'
import Badge from 'react-bootstrap/Badge'

import { getIntentByQuery } from '../lib/getIntentByQuery'
import Loading from './loading'
import { v4 as uuid } from 'uuid'
import ListGroup from 'react-bootstrap/ListGroup'
import IntentData from '../lib/data/intentData'

export default function StepMessage({ previousStep, triggerNextStep }) {
  const [message, setMessage] = useState(null)
  const [label, setLabel] = useState(null)
  const [source, setSource] = useState(null)

  useEffect(() => {
    (async () => {
      let intentData = { ...IntentData }

      if (typeof previousStep.value === 'string') {
        intentData = await getIntentByQuery(previousStep.value)
      } else {
        intentData = previousStep.value
      }

      const errorPoofingDoc = {
        //default value
        link: [],
        list: [],
        //overwrite default value
        ...intentData.doc
      }


      const trigger = errorPoofingDoc.link.length > 0 ? 'otherlink' :
        errorPoofingDoc.list.length > 0 ? 'otherlist' :
          intentData.trigger

      triggerNextStep({ trigger, value: intentData })

      const { header, list } = intentData.doc.explanations

      let tempMessage = {
        header,
        list
      }

      setMessage(tempMessage)
      setLabel(intentData.doc.label)
      setSource(intentData.source)
    })()
  }, [])

  if (!message) return <Loading />

  return (
    <Fragment>
      <h5>
        <Badge variant="dark">{label}</Badge>
        <Badge pill variant="light" className='ml-2' >{source}</Badge>
      </h5>
      {
        message.list.length < 1 ?
          '不解釋....' :
          message.list.length === 1 ?
            <Fragment>
              <p>
                {message.header}
              </p>
              <p>
                {message.list.find(x => x)}
              </p>
            </Fragment>
            :
            <ListGroup variant={'outline-dark'}>
              <p>
                {message.header}
              </p>
              {
                message.list
                  .map(messageItem => {
                    return <ListGroup.Item key={uuid()}>{messageItem}</ListGroup.Item>
                  })
              }
            </ListGroup>
      }
    </Fragment >
  )
}
