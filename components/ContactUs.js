import { Fragment, useState, useEffect } from 'react'
import { contactUsConfig } from '../config/contactUs'

function ContactUs({ triggerNextStep }) {
  // todo: transform t
  const t = (x) => x
  // todo: transform i18n
  const i18n = { language: 'en' }

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

// todo: locale:contactUs
export default ContactUs
