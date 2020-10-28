import { Fragment, useEffect, useState } from 'react'
import Badge from 'react-bootstrap/Badge'

import Loading from '../Loading/MessageLoading'

import ListGroup from 'react-bootstrap/ListGroup'
import IntentData from '../../lib/data/intentData'
import { getContent } from '../../lib/dataProcess'

import { withTranslation } from '../../config/i18n'

function StepLink({ previousStep, triggerNextStep, t, i18n }) {
  const [links, setLinks] = useState(null)
  const [stepLinkLabel, setStepLinkLabel] = useState(null)

  useEffect(() => {
    (async () => {
      const { language } = i18n
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
          {links.map((link, idx) => (
            <ListGroup.Item
              as={'a'}
              key={`${idx}`}
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

export default withTranslation('stepOptions')(StepLink)