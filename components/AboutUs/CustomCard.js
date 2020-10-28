import Card from 'react-bootstrap/Card'

function CustomCard({ displayItems }) {
  // todo: transform t
  const t = (x) => x

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

// todo: locale:aboutUs
export default CustomCard
