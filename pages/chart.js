import { Fragment, useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { use100vh } from 'react-div-100vh'


import { getRequestSummary } from '../lib/firebaseResult'
import PageLoading from '../components/Loading/PageLoading';
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Copyright, HeaderName } from '../config/aboutUs'

export default function CustomChart() {
  

  const [data, setData] = useState(null)


  useEffect(() => {
    (async () => {
      let summary = await getRequestSummary()
      let backgroundColor = []
      let borderColor = []

      Object.keys(summary).forEach (item => {

        const r = Math.floor(Math.random() * 255) + 1 ;
        const g = Math.floor(Math.random() * 255) + 1 ;
        const b = Math.floor(Math.random() * 255) + 1 ;

        backgroundColor.push(`rgba(${r}, ${g}, ${b}, 0.2)`)
        borderColor.push(`rgba(${r}, ${g}, ${b}, 1)`)

      })

      let data = {
        labels: Object.keys(summary),
        datasets: [{
          label: '搵過幾多次',
          data: Object.values(summary),
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: 1
        }]
      }

      setData(data)

    })()
  }, [])


  const height = use100vh()

  if (!data || !height) return (<PageLoading />)


  return (
    <Fragment>
      <Header HeaderName={HeaderName} />
      <Container style={{ height: height }} className="shadow-lg p-3 mb-5 bg-white rounded">
      <div>
        <Alert variant="success">啲人搵過啲咩</Alert>
        <Bar
          data={data}
          width={400}
          height={200}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>      
      </Container>
      <Footer Copyright={Copyright} />
    </Fragment>
  )

}


