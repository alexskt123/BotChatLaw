import { Fragment, useEffect, useState } from 'react'
import Media from 'react-bootstrap/Media'
import Badge from 'react-bootstrap/Badge'

import { getIntentDoc } from '../lib/firebaseResult'
import Loading from './loading'

export default function StepMessage({ previousStep, triggerNextStep }) {
  const [message, setMessage] = useState(null)
  const [label, setLabel] = useState(null)

  useEffect(() => {
    (async () => {
      let doc

      if (typeof previousStep.value === "string") {
        doc = await getIntentDoc(previousStep.value)
      } else {
        doc = previousStep.value
      }

      let message = doc && doc.explanation ? `${doc.explanation}` : '不解釋....'

      if (doc && doc.link && doc.link.length >= 1) {
        triggerNextStep({ trigger: 'otherlink', value: doc })
      }
      else if (doc && doc.list && doc.list.length >= 1) {
        triggerNextStep({ trigger: 'otherlist', value: doc })
      }
      else {
        triggerNextStep({ trigger: 'head' })
      }

      setMessage(message)
      setLabel(doc.label)
    })()
  }, [])

  if (!message) return <Loading />

  return (
    <Fragment>
      <Media>
        <img
          width={28}
          height={42}
          className="mr-3"
          src="lawyerAvatar.png"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5><Badge variant="dark">{label}</Badge></h5>
          <p>
            {message}
          </p>
        </Media.Body>
      </Media>
    </Fragment>
  );
}
