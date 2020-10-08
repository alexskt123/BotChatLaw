
import { use100vh } from 'react-div-100vh'
import PageLoading from '../components/PageLoading'

import { Fragment } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'
import Alert from 'react-bootstrap/Alert'
import CardDeck from 'react-bootstrap/CardDeck'

import { v4 as uuid } from 'uuid'

import CustomCarousel from '../components/AboutUs/CustomCarousel'
import CustomCard from '../components/AboutUs/CustomCard'
import { CarouselDisplayItems, CardDisplayitems, Copyright, HeaderName } from '../config/aboutUs'

export default function aboutus() {

  const height = use100vh()

  if (!height) return <PageLoading />

  const carouselDisplayItems = [...CarouselDisplayItems]
  const cardDisplayitems = [...CardDisplayitems]


  return (
    <Fragment>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="index">
          <img
            alt=""
            src="logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {HeaderName}
        </Navbar.Brand>
      </Navbar>
      <Container height={height} className="shadow-lg p-3 mb-5 bg-white rounded">
        <div className="mt-3">
          <Row className="justify-content-center">
            <img src="logo.png"></img>
          </Row>
        </div>
        <CustomCarousel displayItems={carouselDisplayItems} />
        <div className="mt-5" />
        <CardDeck>
          {cardDisplayitems.map(cardDisplayItem => {
            return (
              <CustomCard displayItems={cardDisplayItem} key={uuid()} />
            )
          })}
        </CardDeck>
        <Row className="justify-content-center mt-5">
          <Alert variant="secondary">
            {Copyright}
          </Alert>
        </Row>
        <div className="mb-3" />
      </Container>
    </Fragment>
  )
}