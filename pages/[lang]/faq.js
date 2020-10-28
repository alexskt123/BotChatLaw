import { Fragment, useEffect, useState } from 'react'
import Badge from 'react-bootstrap/Badge'
import { use100vh } from 'react-div-100vh'
import CustomContainer from '../../components/CustomContainer'
import PageLoading from '../../components/Loading/PageLoading'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { v4 as uuid } from 'uuid'

function FAQ() {
  // todo: transform t
  const t = (x) => x
  // todo: transform i18n
  const i18n = { language: 'en' }

  const height = use100vh()
  const { language } = i18n
  const [faqList, setFaqList] = useState([])

  useEffect(() => {
    setFaqList(t('list', { returnObjects: true }))

    console.log(faqList)
  }, [language])

  if (!height) return <PageLoading />

  return (
    <Fragment>
      <CustomContainer style={{ minHeight: height }}>
        <Fragment>
          <h2><Badge variant='dark'>{t('title')}</Badge></h2>
          <Accordion defaultActiveKey="0">
            {faqList.map((item, idx) => {
              return (
                <Card key={uuid()}>
                  <Accordion.Toggle as={Card.Header} eventKey={`${idx}`}>
                    {item.question}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={`${idx}`}>
                    <Card.Body>
                      {item.answer}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              )
            })}
          </Accordion>
        </Fragment>
      </CustomContainer>
    </Fragment>
  )
}

// todo: locale:faq
export default FAQ
