
import { Fragment } from 'react'

import FloatingChatBot from './ChatBot/FloatingChatBot'
import Wiggle from './Wiggle'
import Header from './Header'
import Footer from './Footer'
import Settings from '../config/settings'
import { withTranslation } from 'next-i18next'

function Layout({ children, t }) {
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

export default withTranslation('settings')(Layout)
