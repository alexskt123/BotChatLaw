
import { Fragment } from 'react'

import FloatingChatBot from './ChatBot/FloatingChatBot'
import Wiggle from './Wiggle'
import Header from './Header'
import Footer from './Footer'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function Layout({ children }) {
  return (
    <Fragment>
      <GoogleReCaptchaProvider
        useRecaptchaNet
        reCaptchaKey="6Lcbp9wZAAAAABHzUIdg_fC99UFjrWtizp7F3pJA"
        scriptProps={{ async: true, defer: true, appendTo: 'body' }}
      >
        <Header />
        {{ ...children }}
        <Wiggle>
          <FloatingChatBot />
        </Wiggle>
        <Footer />
      </GoogleReCaptchaProvider>

    </Fragment>
  )
}

export default Layout
