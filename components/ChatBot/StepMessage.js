import { Fragment, useEffect, useState } from 'react'
import Badge from 'react-bootstrap/Badge'

import { getIntentByQuery } from '../../lib/getIntentByQuery'
import Loading from '../Loading/MessageLoading'
import { v4 as uuid } from 'uuid'
import ListGroup from 'react-bootstrap/ListGroup'
import IntentData from '../../lib/data/intentData'
import BouncyButton from '../../components/BouncyButton'

import containsChinese from 'contains-chinese'
import { withTranslation } from '../../config/i18n'

function StepMessage({ previousStep, triggerNextStep }) {
  const [config, setConfig] = useState(null)

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

      const lang = containsChinese(intentData.doc.label) ? 'zh' : 'en'

      let config = {}
      config.message = tempMessage
      config.label = intentData.doc.label
      config.source = intentData.source
      config.wikiHref = `https://${lang}.wikipedia.org/wiki/${intentData.doc.label}`

      setConfig(config)
    })()
  }, [])

  if (!config) return <Loading />

  return (
    <Fragment>
      <h5>
        <Badge variant="dark">{config.label}</Badge>
        {config.source && <BouncyButton href={config.wikiHref} target='_blank' ><span>{config.source}</span></BouncyButton>}
      </h5>
      {
        config.message.list.length < 1 ?
          '不解釋....' :
          config.message.list.length === 1 ?
            <Fragment>
              <p>
                {config.message.header}
              </p>
              <p>
                {config.message.list.find(x => x)}
              </p>
            </Fragment>
            :
            <ListGroup variant={'outline-dark'}>
              <p>
                {config.message.header}
              </p>
              {
                config.message.list
                  .map(messageItem => {
                    return <ListGroup.Item key={uuid()}>{messageItem}</ListGroup.Item>
                  })
              }
            </ListGroup>
      }
    </Fragment >
  )
}

export default withTranslation('stepOptions')(StepMessage)
