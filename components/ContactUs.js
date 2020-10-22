import { Fragment } from 'react'
import { contactUsConfig } from '../config/contactUs'

import { withTranslation } from '../config/i18n'

function ContactUs({ t }) {

  return (
    <Fragment>
      <p>{t('emailintro')}</p>
      <a href={`mailto:${contactUsConfig.email}`}>{contactUsConfig.email}</a>
    </Fragment>
  )
}

export default withTranslation('contactUs')(ContactUs)