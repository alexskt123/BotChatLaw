import { Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import CustomSpinner from './CustomSpinner'

import { v4 as uuid } from 'uuid'
import { withTranslation } from '../../config/i18n'

function LoadingSpinner({ t }) {

  const spinners = [...Array(3)].map(_item => uuid())

  return (
    <Fragment>
      <Button variant="dark" disabled>
        {spinners.map(item => {
          return <CustomSpinner key={item} />
        })}
        {t('loadingText')}
        {spinners.map(item => {
          return <CustomSpinner key={item} />
        })}
      </Button>
    </Fragment>

  )
}

export default withTranslation('settings')(LoadingSpinner)