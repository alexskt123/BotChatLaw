import { v4 as uuid } from 'uuid'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Settings, { NavItems } from '../config/settings'

export default function Header({ HeaderName }) {

  const imgConfig = {
    alt: '',
    src: Settings.LogoImgSrc,
    width: '30',
    height: '30',
    className: 'd-inline-block align-top'
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <img
          {...imgConfig}
        />
        {HeaderName}
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {NavItems.map(item => {
            return (
              <Nav.Link key={uuid()} href={item.href}>
                {item.label}
              </Nav.Link>
            )
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}