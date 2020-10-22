// react and next
import App from 'next/app'
import { Fragment } from 'react'
// style
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// components
import Layout from '../components/Layout'
import VersionChecking from '../components/VersionChecking'
// config
import { appWithTranslation } from '../config/i18n'
// lib
import StoreContext from '../lib/store'

function MyApp({ Component, pageProps }) {
  return (
    <StoreContext>
      <Fragment>

        <VersionChecking />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Fragment>
    </StoreContext>
  )
}

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)
