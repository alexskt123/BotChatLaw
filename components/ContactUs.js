import { Fragment, useState, useEffect } from 'react'
import { contactUsConfig } from '../config/contactUs'

import { withTranslation } from '../config/i18n'

function ContactUs({ triggerNextStep, t, i18n }) {

  const [emailintro, setEmailIntro] = useState(null)
  const { language } = i18n

  useEffect(() => {
    setEmailIntro(t('emailintro'))

    triggerNextStep({ trigger: `stageask${language}` })
  }, [])

  return (
    <Fragment>
      <p>{emailintro}</p>
      <a href={`mailto:${contactUsConfig.email}`}>{contactUsConfig.email}</a>
    </Fragment>
  )
}

export default withTranslation('contactUs')(ContactUs)