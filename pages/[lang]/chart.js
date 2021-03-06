import { Fragment } from 'react'
import { Bar } from 'react-chartjs-2'
import { use100vh } from 'react-div-100vh'

import { useSummary } from '../../lib/hooks/useFire'
import PageLoading from '../../components/Loading/PageLoading'
import Alert from 'react-bootstrap/Alert'
import { getTop } from '../../lib/dataProcess'
import CustomContainer from '../../components/CustomContainer'

import { withTranslation } from '../../config/i18n'
import { nameSpaceConfig } from '../../config/nameSpace'

function CustomChart({ t }) {
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
      label: t('chartTitle'),
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
      <CustomContainer style={{ minHeight: height }}>
        <div>
          <Alert variant="success">{t('chartLabel')}</Alert>
          <Bar {...barConfig} />
        </div>
      </CustomContainer>
    </Fragment>
  )
}

CustomChart.getInitialProps = async () => ({
  namespacesRequired: nameSpaceConfig.chart
})

export default withTranslation('chart')(CustomChart)

