import { Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import CustomSpinner from './CustomSpinner'

import { v4 as uuid } from 'uuid'

function LoadingSpinner() {
  // todo: transform t
  const t = (x) => x

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

// todo: locale:settings
export default LoadingSpinner
