
import { Fragment } from 'react'

import ChatBot from './ChatBot/FloatingChatBot'
import Wiggle from './Wiggle'
import Header from './Header'
import Footer from './Footer'
import { Copyright, HeaderName } from '../config/aboutUs'

export default function Layout ({children}) {
  return (    
    <Fragment>
      <Header HeaderName={HeaderName} />
      {{ ...children }}
      <Wiggle>
        <ChatBot />
      </Wiggle>
      <Footer Copyright={Copyright} />
    </Fragment>
  )
}