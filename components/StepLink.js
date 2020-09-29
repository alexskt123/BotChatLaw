import { Fragment, useEffect, useState } from 'react'
import Loading from './loading'

import { v4 as uuid } from 'uuid'

export default function StepLink({ previousStep, triggerNextStep }) {
  const [links, setLinks] = useState(null)

  useEffect(() => {
    (async () => {
      const doc = previousStep.value

      let links

      if (doc && doc.link) {
        links = doc.link
      }

      setLinks(links)

      if (doc && doc.list) {
        triggerNextStep({ trigger: 'otherlist', value: doc })
      }
      else
        triggerNextStep({ trigger: 'head' })
    })()
  }, [])

  if (!links) return <Loading />

  return (
    <Fragment>
      <h4>請點擊以下連結以獲取更多的資訊:</h4>
      {links.map(link => (
        <div style={{ color: 'blue' }} key={uuid()}>
          <li>
            <a href={link.href} target="_blank">{link.label}</a>
          </li>
        </div>
      ))}
    </Fragment>
  );
}
