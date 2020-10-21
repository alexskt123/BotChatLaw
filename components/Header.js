import { v4 as uuid } from 'uuid'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Settings, { NavItems } from '../config/settings'

import Button from 'react-bootstrap/Button'

import { withTranslation } from '../config/i18n'

import { useState } from 'react'

function Header({ HeaderName, t, i18n }) {


  const imgConfig = {
    alt: '',
    src: Settings.LogoImgSrc,
    width: '30',
    height: '30',
    className: 'd-inline-block align-top'
  }

  const { language } = i18n

  const changeLanguage = () => {    

    const changeLang = swithLang(language)

    setLang(changeLang)
    i18n.changeLanguage(changeLang)
   
  }

  const swithLang = (language) => {
    let changeLang

    if (language === 'zh') {
      changeLang = 'en'
    }
    else if (language === 'en') {
      changeLang = 'zh'
    }  
    
    return changeLang
  }

  const [lang, setLang] = useState(language)

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
          {NavItems.map((item, idx) => {
            return (
              <Nav.Link key={uuid()} href={item.href}>
                {t(`NavItemLabels.${idx}`)}
              </Nav.Link>
            )
          })}
        </Nav>
      </Navbar.Collapse>
      <Button variant='dark' key={uuid()} onClick={() => changeLanguage(lang)}>{lang}</Button>
    </Navbar>
  )
}

export default withTranslation('header')(Header)
