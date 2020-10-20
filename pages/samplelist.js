
import { use100vh } from 'react-div-100vh'
import { Fragment } from 'react'

import { v4 as uuid } from 'uuid'

import ListGroup from 'react-bootstrap/ListGroup'

import PageLoading from '../components/Loading/PageLoading'
import CustomContainer from '../components/CustomContainer'
import { sampleListItems } from '../config/sampleList'

export default function SampleList() {

  const height = use100vh()

  if (!height || !sampleListItems) return <PageLoading />

  return (
    <Fragment>
      <CustomContainer style={{ minHeight: height }}>
        <ListGroup variant={'outline-dark'}>
          {sampleListItems.map(item => {
            return (
              <ListGroup.Item
                as={'a'}
                key={uuid()}
                href={item.href}
              >
                {item.label}
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </CustomContainer>
    </Fragment>
  )
}