
import { Fragment } from 'react'

import FloatingChatBot from './ChatBot/FloatingChatBot'
import Wiggle from './Wiggle'
import Header from './Header'
import Footer from './Footer'
import Settings from '../config/settings'

function Layout({ children }) {
  // todo: transform t
  const t = (x) => x

  return (
    <Fragment>
      <Header HeaderName={t('headerTitle')} />
      {{ ...children }}
      <Wiggle>
        <FloatingChatBot />
      </Wiggle>
      <Footer Copyright={Settings.Copyright} />
    </Fragment>
  )
}

// todo: locale:settings
export default Layout
