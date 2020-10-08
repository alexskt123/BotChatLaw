
import { use100vh } from 'react-div-100vh'
import PageLoading from '../components/PageLoading'
import { Fragment } from 'react'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'
import CustomCarousel from '../components/AboutUs/CustomCarousel'
import { DisplayItems , headerName } from '../config/aboutUs'

export default function aboutus() {

  const height = use100vh()

  if (!height) return <PageLoading />

  const displayItems = [...DisplayItems]

  return (
    <Fragment>
      <Container height={height} className="shadow-lg p-3 mb-5 bg-white rounded">
        <div className="mt-3">
          <Badge variant="dark" className="mb-3"><h2>{headerName}</h2></Badge>
        </div>      
        <CustomCarousel displayItems={displayItems} className="" />
      </Container>
    </Fragment>
  )
}