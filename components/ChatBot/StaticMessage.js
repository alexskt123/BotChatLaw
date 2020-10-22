import { Fragment } from 'react'
import { withTranslation } from '../../config/i18n'

function StaticMessage({ step, t }) {

  return (
    <Fragment>
      <span>{t(`staticMsg.${step.id}`)}</span>
    </Fragment>
  )
}

export default withTranslation('chatBot')(StaticMessage)
