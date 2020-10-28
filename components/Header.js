// react, next and hooks
import { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
// lib
import { v4 as uuid } from 'uuid'
import Switch from 'react-switch'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
// config
import Settings, { NavItems, webConfig } from '../config/settings'

function Header({ HeaderName }) {
  // todo: transform t
  const t = (x) => x
  // todo: transform i18n
  const i18n = { language: 'en' }

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

  const languageSwitchConfig = {
    language,
    languages: webConfig.languages,
    changeLanguage: () => changeLanguage(),
    t
  }

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar fixed="top" bg="dark" variant="dark" expand="sm" style={{ zIndex: '998!important' }}>
        <Navbar.Brand>
          <img
            {...imgConfig}
          />
          {HeaderName}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
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

          <LanguageSwitch {...languageSwitchConfig} />
        </Navbar.Collapse>
      </Navbar>
    </Fragment >
  )
}

// todo: locale:header
export default Header

export const LanguageSwitch = ({ language, languages, changeLanguage, t }) => {
  const labels = [...languages].reverse().map(l => t(`languages.${l}`))

  return (
    <Fragment>
      <Form inline>
        <LanguageLabel>
          {labels[0]}
        </LanguageLabel>
        <label>
          <Switch
            checked={language === languages[0]}
            onChange={changeLanguage}
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </label>
        <LanguageLabel>
          {labels[1]}
        </LanguageLabel>
      </Form>
    </Fragment>
  )
}

export const LanguageLabel = ({ children }) => {
  return (
    <Fragment>
      <span className='nav-link' style={{ color: '#fff' }}>
        {children}
      </span>
    </Fragment>
  )
}
