import Carousel from 'react-bootstrap/Carousel'
import Alert from 'react-bootstrap/Alert'
import { v4 as uuid } from 'uuid'

function CustomCarousel({ displayItems }) {

  return (
    <Carousel>
      {displayItems.map((item) => (
        <Carousel.Item key={uuid()}>
          <img
            className="d-block w-100"
            src={item.imgsrc}
          />
          <Carousel.Caption>
            <Alert variant="secondary">
              <h3>{item.t.captionLabel}</h3>
              <p>{item.t.captionContent}</p>
            </Alert>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>


  )

}

export default CustomCarousel
