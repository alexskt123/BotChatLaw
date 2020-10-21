import Card from 'react-bootstrap/Card'

import { withTranslation } from '../../config/i18n'

function CustomCard({ displayItems , t }) {

  return (
    <Card border="dark" className="w-100 my-3" style={{ ['minWidth']: '18rem' }}>
      <Card.Img variant="top" src={displayItems.cardDisplayItem.imgsrc} />
      <Card.Body>
        <Card.Title>{t(`CardDisplayitems.${displayItems.idx}.title`)}</Card.Title>
        <Card.Text>
        {t(`CardDisplayitems.${displayItems.idx}.text`)}
        </Card.Text>
      </Card.Body>
    </Card >
  )
}

export default withTranslation('aboutUs')(CustomCard)