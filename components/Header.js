// react, next and hooks
import { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
// lib
import { v4 as uuid } from 'uuid'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// config
import Settings, { NavItems } from '../config/settings'
import { withTranslation } from '../config/i18n'

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
  const [title, setTitle] = useState('')
  const router = useRouter()

  useEffect(() => {
    const idx = NavItems.findIndex(item => `${router.asPath}`.includes(item.href))
    if (idx > -1) {
      let translated = t(`NavItemLabels.${idx}`)
      setTitle(`${HeaderName} - ${translated}`)
    } else {
      setTitle(HeaderName)
    }
  }, [router])

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>

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
              const href = `/${lang}${item.href}`
              const active = router.asPath === href
              return (
                <Nav.Link key={uuid()} href={href} active={active} disabled={active}>
                  {t(`NavItemLabels.${idx}`)}
                </Nav.Link>
              )
            })}
          </Nav>
        </Navbar.Collapse>
        <Button variant='dark' key={uuid()} onClick={() => changeLanguage(lang)}>{lang}</Button>
      </Navbar>
    </Fragment >
  )
}

export default withTranslation('header')(Header)
