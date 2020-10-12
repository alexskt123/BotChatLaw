import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Header({ HeaderName }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <img
          alt=""
          src="logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {HeaderName}
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">關於我哋</Nav.Link>
          <Nav.Link href="/samplelist">法律文件範例</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}