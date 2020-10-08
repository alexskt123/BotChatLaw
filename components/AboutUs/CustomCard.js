import Card from 'react-bootstrap/Card'

export default function CustomCard({ displayItems }) {

  return (
    <Card border="dark" className="mx-auto" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={displayItems.imgsrc} />
      <Card.Body>
        <Card.Title>{displayItems.title}</Card.Title>
        <Card.Text>
          {displayItems.text}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}