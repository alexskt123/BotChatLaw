import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import { v4 as uuid } from 'uuid'

function CustomCards({ displayItems }) {
  return (
    <CardDeck className="justify-content-center">
      {displayItems.map((item) => (
        <Card key={uuid()} border="dark" className="w-100 my-3" style={{ ['minWidth']: '18rem' }}>
          <Card.Img variant="top" src={item.imgsrc} />
          <Card.Body>
            <Card.Title>{item.t.title}</Card.Title>
            <Card.Text>
              {item.t.text}
            </Card.Text>
          </Card.Body>
        </Card >
      ))}
    </CardDeck>
  )
}

export default CustomCards
