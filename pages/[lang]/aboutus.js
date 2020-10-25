import { useRouter } from 'next/router'
import { use100vh } from 'react-div-100vh'
import PageLoading from '../../components/Loading/PageLoading'
import CustomContainer from '../../components/CustomContainer'
import { Fragment } from 'react'
import Row from 'react-bootstrap/Row'
import CardDeck from 'react-bootstrap/CardDeck'

import { v4 as uuid } from 'uuid'

import CustomCarousel from '../../components/AboutUs/CustomCarousel'
import CustomCard from '../../components/AboutUs/CustomCard'
import { CarouselDisplayItems, CardDisplayitems } from '../../config/aboutUs'
import Settings from '../../config/settings'
import { nameSpaceConfig } from '../../config/nameSpace'

export default function aboutus() {

  const { query } = useRouter()

  console.log({ query })

  const height = use100vh()

  if (!height) return <PageLoading />

  const carouselDisplayItems = [...CarouselDisplayItems]
  const cardDisplayitems = [...CardDisplayitems]


  return (
    <Fragment>
      <CustomContainer style={{ minHeight: height }}>
        <Fragment>
          <Row className="justify-content-center">
            <img src={Settings.FlatLogo}></img>
          </Row>
          <CustomCarousel displayItems={carouselDisplayItems} />
          <div className="mt-5" />
          <CardDeck className="justify-content-center">
            {cardDisplayitems.map((cardDisplayItem, idx) => {
              return (
                <CustomCard displayItems={{ cardDisplayItem, idx }} key={uuid()} />
              )
            })}
          </CardDeck>
          <div className="mb-3" />
        </Fragment>
      </CustomContainer>
    </Fragment>
  )
}

aboutus.getInitialProps = async () => ({
  namespacesRequired: nameSpaceConfig.aboutus
})
