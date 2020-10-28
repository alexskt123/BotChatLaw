import { Fragment, useEffect, useState } from 'react'
import Badge from 'react-bootstrap/Badge'

import Loading from '../Loading/MessageLoading'

import { v4 as uuid } from 'uuid'

import ListGroup from 'react-bootstrap/ListGroup'
import IntentData from '../../lib/data/intentData'
import { getContent } from '../../lib/dataProcess'

function StepLink({ previousStep, triggerNextStep }) {
  // todo: transform t
  const t = (x) => x
  // todo: transform i18n
  const i18n = { language: 'en' }

  const { language } = i18n

  const [links, setLinks] = useState(null)
  const [stepLinkLabel, setStepLinkLabel] = useState(null)

  useEffect(() => {
    (async () => {
      let intentData = { ...IntentData }

      intentData = previousStep.value

      const {
        link,
        list
      } = intentData.doc

      let links = []
      link.forEach(item => {
        links.push({
          href: item.href,
          label: getContent(item.label, language)
        })
      })

      setLinks(links)
      setStepLinkLabel(t('stepLinkLabel'))

      const trigger = list.length > 0 ? 'otherlist' : intentData.trigger

      triggerNextStep({ trigger, value: intentData })
    })()
  }, [])

  if (!links) return <Loading />

  return (
    <Fragment>
      <h5><Badge variant="dark">{stepLinkLabel}</Badge></h5>
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

// todo: locale:stepOptions
export default StepLink
