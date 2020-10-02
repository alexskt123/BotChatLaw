import { Fragment, useEffect, useState } from 'react'
import Badge from 'react-bootstrap/Badge'

import { getIntentDoc } from '../lib/firebaseResult'
import Loading from './loading'
import { v4 as uuid } from 'uuid'
import ListGroup from 'react-bootstrap/ListGroup'

export default function StepMessage({ previousStep, triggerNextStep }) {
  const [message, setMessage] = useState(null)
  const [label, setLabel] = useState(null)

  useEffect(() => {
    (async () => {
      let doc

      if (typeof previousStep.value === 'string') {
        doc = await getIntentDoc(previousStep.value)
      } else {
        doc = previousStep.value
      }

      const errorPoofingDoc = {
        //default value
        link: [],
        list: [],
        //overwrite default value
        ...doc
      }

      console.log({ errorPoofingDoc })

      const trigger = errorPoofingDoc.link.length > 0 ? 'otherlink' :
        errorPoofingDoc.list.length > 0 ? 'otherlist' :
          'head'

      triggerNextStep({ trigger, value: doc })

      const { header, list } = doc.explanations

      let tempMessage = {
        header,
        list
      }

      setMessage(tempMessage)
      setLabel(doc.label)
    })()
  }, [])

  if (!message) return <Loading />

  return (
    <Fragment>
      <h5><Badge variant="dark">{label}</Badge></h5>
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
