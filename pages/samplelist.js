
import { use100vh } from 'react-div-100vh'
import { Fragment } from 'react'

import { v4 as uuid } from 'uuid'

import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'

import PageLoading from '../components/Loading/PageLoading'
import { sampleListItems } from '../config/sampleList'

export default function SampleList() {

  const height = use100vh()

  if (!height || !sampleListItems) return <PageLoading />

  return (
    <Fragment>
      <Container style={{ height: height }} className="shadow-lg p-3 mb-5 bg-white rounded">
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
      </Container>
    </Fragment>
  )
}