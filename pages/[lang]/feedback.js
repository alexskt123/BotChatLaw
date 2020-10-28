import { Fragment, useEffect, useState } from 'react'

import { use100vh } from 'react-div-100vh'
import CustomContainer from '../../components/CustomContainer'
import PageLoading from '../../components/Loading/PageLoading'
import { withTranslation } from '../../config/i18n'
import { nameSpaceConfig } from '../../config/nameSpace'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { submitFeedback } from '../../lib/firebaseResult.js'
import { useRouter } from 'next/router'


function Feedback({ t, i18n }) {
  const height = use100vh()
  const { language } = i18n
  const router = useRouter()

  const [config, setConfig] = useState([])
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      await submitFeedback(event.target.elements["0"].value, event.target.elements["1"].value, event.target.elements["2"].value)
      router.push('/')
    }
    setValidated(true);
  };

  useEffect(() => {
    setConfig(t('form', { returnObjects: true }))

  }, [language])

  if (!height) return <PageLoading />

  return (
    <Fragment>
      <CustomContainer style={{ minHeight: height }}>
        <Fragment>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>{config.name}</Form.Label>
              <Form.Control required type="name" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>{config.email}</Form.Label>
              <Form.Control required type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>{config.feedback}</Form.Label>
              <Form.Control required as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              {config.submit}
            </Button>
          </Form>
        </Fragment>
      </CustomContainer>
    </Fragment>
  )
}

Feedback.getInitialProps = async () => ({
  namespacesRequired: nameSpaceConfig.feedback
})

export default withTranslation('feedback')(Feedback)
