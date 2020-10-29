import { Fragment, useEffect, useState } from 'react'
import Badge from 'react-bootstrap/Badge'
import { use100vh } from 'react-div-100vh'
import CustomContainer from '../../components/CustomContainer'
import PageLoading from '../../components/Loading/PageLoading'
import { withTranslation } from '../../config/i18n'
import { nameSpaceConfig } from '../../config/nameSpace'
import Jumbotron from 'react-bootstrap/Jumbotron'

function disclaimer({ t, i18n }) {
  const height = use100vh()
  const { language } = i18n
  const [disclaimerDetail, setDisclaimerDetail] = useState([])

  useEffect(() => {
    setDisclaimerDetail(t('detail', { returnObjects: true }))
  }, [language])

  if (!height) return <PageLoading />

  return (
    <Fragment>
      <CustomContainer style={{ minHeight: height }}>
        <Fragment>
          <h2><Badge variant='dark'>{t('title')}</Badge></h2>
          <Jumbotron className="p-3 mt-3">
            {disclaimerDetail.map((item, idx) => {
              return (
                <p key={`${idx}`}>{item}</p>
              )
            })}
          </Jumbotron>
        </Fragment>
      </CustomContainer>
    </Fragment>
  )
}

disclaimer.getInitialProps = async () => ({
  namespacesRequired: nameSpaceConfig.disclaimer
})

export default withTranslation('disclaimer')(disclaimer)
