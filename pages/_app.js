import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ChatBot from '../components/ChatBot/FloatingChatBot'
import Wiggle from '../components/Wiggle'
import { Fragment } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
      <Wiggle>
        <ChatBot />
      </Wiggle>
    </Fragment>
  )

}

export default MyApp
