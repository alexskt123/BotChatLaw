import { Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import CustomSpinner from './CustomSpinner'

import { withTranslation } from '../../config/i18n'

function LoadingSpinner({ t }) {

  const spinners = [...Array(3)].map(_item => '')

  return (
    <Fragment>
      <Button variant="dark" disabled>
        {spinners.map((item, idx) => {
          return <CustomSpinner key={`${idx}`} />
        })}
        {t('loadingText')}
        {spinners.map((item, idx) => {
          return <CustomSpinner key={`${idx}`} />
        })}
      </Button>
    </Fragment>

  )
}

export default withTranslation('settings')(LoadingSpinner)