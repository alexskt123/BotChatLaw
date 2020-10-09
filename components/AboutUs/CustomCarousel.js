import Carousel from 'react-bootstrap/Carousel'
import Alert from 'react-bootstrap/Alert'
import { v4 as uuid } from 'uuid'

export default function CustomCarousel({ displayItems }) {

  return (
    <Carousel>
      {displayItems.map(item => {
        return (
          <Carousel.Item key={uuid()}>
            <img
              className="d-block w-100"
              src={item.imgsrc}
            />
            <Carousel.Caption>
              <Alert variant="secondary">
                <h3>{item.captionLabel}</h3>
                <p>{item.captionContent}</p>
              </Alert>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>


  )

}