import { Fragment, useState, useEffect } from 'react'
import { contactUsConfig } from '../config/contactUs'

import { withTranslation } from '../config/i18n'

function ContactUs({ t }) {

  const [emailintro, setEmailIntro] = useState(null)

  useEffect(() => {
    setEmailIntro(t('emailintro'))
  }, [])

  return (
    <Fragment>
      <p>{emailintro}</p>
      <a href={`mailto:${contactUsConfig.email}`}>{contactUsConfig.email}</a>
    </Fragment>
  )
}

export default withTranslation('contactUs')(ContactUs)