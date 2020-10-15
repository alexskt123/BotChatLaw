
import { use100vh } from 'react-div-100vh'
import PageLoading from '../components/Loading/PageLoading'

import { Fragment } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CardDeck from 'react-bootstrap/CardDeck'

import { v4 as uuid } from 'uuid'

import CustomCarousel from '../components/AboutUs/CustomCarousel'
import CustomCard from '../components/AboutUs/CustomCard'
import { CarouselDisplayItems, CardDisplayitems } from '../config/aboutUs'

export default function aboutus() {

  const height = use100vh()

  if (!height) return <PageLoading />

  const carouselDisplayItems = [...CarouselDisplayItems]
  const cardDisplayitems = [...CardDisplayitems]


  return (
    <Fragment>      
      <Container height={height} className="shadow-lg p-3 mb-5 bg-white rounded">
        <Row className="justify-content-center">
          <img src="logoFlat.png"></img>
        </Row>
        <CustomCarousel displayItems={carouselDisplayItems} />
        <div className="mt-5" />
        <CardDeck className="justify-content-center">
          {cardDisplayitems.map(cardDisplayItem => {
            return (
              <CustomCard displayItems={cardDisplayItem} key={uuid()} />
            )
          })}
        </CardDeck>
        <div className="mb-3" />

      </Container>      
    </Fragment>
  )
}
