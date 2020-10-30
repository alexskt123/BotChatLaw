import Carousel from 'react-bootstrap/Carousel'
import Alert from 'react-bootstrap/Alert'

import { withTranslation } from '../../config/i18n'

function CustomCarousel({ displayItems, t }) {

  return (
    <Carousel>
      {displayItems.map((item, idx) => {
        return (
          <Carousel.Item key={`${idx}`}>
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

export default withTranslation('aboutUs')(CustomCarousel)