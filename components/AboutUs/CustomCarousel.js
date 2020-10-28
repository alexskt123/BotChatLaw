import Carousel from 'react-bootstrap/Carousel'
import Alert from 'react-bootstrap/Alert'
import { v4 as uuid } from 'uuid'

function CustomCarousel({ displayItems }) {
  // todo: transform t
  const t = (x) => x

  return (
    <Carousel>
      {displayItems.map((item, idx) => {
        return (
          <Carousel.Item key={uuid()}>
            <img
              className="d-block w-100"
              src={item.imgsrc}
            />
            <Carousel.Caption>
              <Alert variant="secondary">
                <h3>{t(`CarouselDisplayItems.${idx}.captionLabel`)}</h3>
                <p>{t(`CarouselDisplayItems.${idx}.captionContent`)}</p>
              </Alert>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>


  )

}

// todo: locale:aboutUs
export default CustomCarousel
