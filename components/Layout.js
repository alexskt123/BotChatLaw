
import { Fragment } from 'react'

import FloatingChatBot from './ChatBot/FloatingChatBot'
import Wiggle from './Wiggle'
import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      {{ ...children }}
      <Wiggle>
        <FloatingChatBot />
      </Wiggle>
      <Footer />
    </Fragment>
  )
}

export default Layout
