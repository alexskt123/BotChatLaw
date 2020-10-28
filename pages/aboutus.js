// react, next and hooks
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { use100vh } from 'react-div-100vh'
// lib
import Row from 'react-bootstrap/Row'
import { getLocale } from '../lib/i18n'
// components
import PageLoading from '../components/Loading/PageLoading'
import CustomContainer from '../components/CustomContainer'
import CustomCarousel from '../components/AboutUs/CustomCarousel'
import CustomCards from '../components/AboutUs/CustomCards'
// config
import { CarouselDisplayItems, CardDisplayitems } from '../config/aboutUs'
import Settings from '../config/settings'

export default function aboutus({ t }) {
  const { locale } = useRouter()
  console.log({ locale, t })

  const height = use100vh()

  if (!height) return <PageLoading />

  const carouselDisplayItems = [...CarouselDisplayItems]
    .map((item, idx) => {
      return {
        ...item,
        t: t.CarouselDisplayItems[idx]
      }
    })
  const cardDisplayitems = [...CardDisplayitems]
    .map((item, idx) => {
      return {
        ...item,
        t: t.CardDisplayitems[idx]
      }
    })


  return (
    <Fragment>
      <CustomContainer style={{ minHeight: height }}>
        <Fragment>
          <Row className="justify-content-center">
            <img src={Settings.FlatLogo}></img>
          </Row>
          <CustomCarousel displayItems={carouselDisplayItems} />
          <div className="mt-5" />

          <CustomCards displayItems={cardDisplayitems} />
          <div className="mb-3" />
        </Fragment>
      </CustomContainer>
    </Fragment>
  )
}

//SSG locale
export async function getStaticProps({ locale }) {
  const t = await getLocale(locale, 'aboutUs.json')

  return {
    props: {
      t
    }
  }
}
