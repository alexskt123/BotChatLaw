import Navbar from 'react-bootstrap/Navbar'
import Alert from 'react-bootstrap/Alert'

export default function Footer({ Copyright }) {

  const footerConfig = {
    sticky: 'bottom',
    bg: 'dark',
    ariant: 'dark'
  }

  return (
    <Navbar {...footerConfig}>
      <Navbar.Brand className="mx-auto">
        <Alert variant="secondary">
          {Copyright}
        </Alert>
      </Navbar.Brand>
    </Navbar>
  )
}