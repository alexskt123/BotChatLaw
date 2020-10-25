import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/Layout'
import VersionChecking from '../components/VersionChecking'
import { Fragment } from 'react'
import { appWithTranslation } from '../config/i18n'

import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <VersionChecking />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)
