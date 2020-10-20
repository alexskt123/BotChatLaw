
import { Fragment } from 'react'

import FloatingChatBot from './ChatBot/FloatingChatBot'
import Wiggle from './Wiggle'
import Header from './Header'
import Footer from './Footer'
import Settings from '../config/settings'

export default function Layout ({children}) {
  return (    
    <Fragment>
      <Header HeaderName={Settings.HeaderName} />
      {{ ...children }}
      <Wiggle>
        <FloatingChatBot />
      </Wiggle>
      <Footer Copyright={Settings.Copyright} />
    </Fragment>
  )
}