import { Fragment } from 'react'
import { Bar } from 'react-chartjs-2'
import { use100vh } from 'react-div-100vh'

import { useSummary } from '../lib/hooks/useFire'
import PageLoading from '../components/Loading/PageLoading'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Copyright, HeaderName } from '../config/aboutUs'
import { getTop } from '../lib/dataProcess'

export default function CustomChart() {
  const height = use100vh()
  const summary = useSummary(null)

  if (!summary || !height) return (<PageLoading />)

  //TOP_LIMIT can upgrade to state for user to input?
  const TOP_LIMIT = 10
  //array is better for sorting and magic
  const top = getTop(summary, TOP_LIMIT)
    .map(item => {
      const r = Math.floor(Math.random() * 255) + 1
      const g = Math.floor(Math.random() * 255) + 1
      const b = Math.floor(Math.random() * 255) + 1

      let backgroundColor = (`rgba(${r}, ${g}, ${b}, 0.2)`)
      let borderColor = (`rgba(${r}, ${g}, ${b}, 1)`)

      return {
        ...item,
        backgroundColor,
        borderColor
      }
    })

  const data = {
    labels: top.map(item => item.label),
    datasets: [{
      label: '搵過幾多次',
      data: top.map(item => item.value),
      backgroundColor: top.map(item => item.backgroundColor),
      borderColor: top.map(item => item.borderColor),
      borderWidth: 1
    }]
  }

  const options = {
    responsive: true,
    scales: { yAxes: [{ ticks: { beginAtZero: true } }] }
  }

  const barConfig = {
    data,
    options,
    width: 400,
    height: 200
  }

  return (
    <Fragment>
      <Header HeaderName={HeaderName} />
      <Container style={{ height }} className="shadow-lg p-3 mb-5 bg-white rounded">
        <div>
          <Alert variant="success">啲人搵過啲咩</Alert>
          <Bar {...barConfig} />
        </div>
      </Container>
      <Footer Copyright={Copyright} />
    </Fragment>
  )
}
