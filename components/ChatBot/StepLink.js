import { Fragment, useEffect, useState } from 'react'
import Badge from 'react-bootstrap/Badge'

import Loading from '../Loading/MessageLoading'

import { v4 as uuid } from 'uuid'

import ListGroup from 'react-bootstrap/ListGroup'
import IntentData from '../../lib/data/intentData'

export default function StepLink({ previousStep, triggerNextStep }) {
  const [links, setLinks] = useState(null)

  useEffect(() => {
    (async () => {
      let intentData = { ...IntentData }

      intentData = previousStep.value

      const {
        link: links,
        list
      } = intentData.doc

      setLinks(links)

      const trigger = list.length > 0 ? 'otherlist' : intentData.trigger

      triggerNextStep({ trigger, value: intentData })
    })()
  }, [])

  if (!links) return <Loading />

  return (
    <Fragment>
      <h5><Badge variant="dark">請點擊以下的連結</Badge></h5>
      <div>
        <ListGroup variant={'outline-dark'}>
          {links.map(link => (
            <ListGroup.Item
              as={'a'}
              key={uuid()}
              href={link.href}
              target="_blank" >
              {link.label}
            </ListGroup.Item>

          ))}
        </ListGroup>
      </div>

    </Fragment>
  )
}
