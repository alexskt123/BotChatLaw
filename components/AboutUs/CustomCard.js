import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import { v4 as uuid } from 'uuid'

export default function CustomCard({ displayItems }) {

  return (
    <Card style={{ width: '18rem' }}>
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