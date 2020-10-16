import { Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import CustomSpinner from './CustomSpinner'

import { v4 as uuid } from 'uuid'

export default function LoadingSpinner() {

  const spinners = [...Array(3)].map(_item => uuid())

  return (
    <Fragment>
      <Button variant="dark" disabled>
        {spinners.map(item => {
          return <CustomSpinner key={item} />
        })}        
        Load緊
        {spinners.map(item => {
          return <CustomSpinner key={item} />
        })} 
      </Button>
    </Fragment>

  )
}