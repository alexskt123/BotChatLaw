import { Fragment, useEffect, useState, useCallback } from 'react'

import { use100vh } from 'react-div-100vh'
import CustomContainer from '../../components/CustomContainer'
import PageLoading from '../../components/Loading/PageLoading'
import { withTranslation } from '../../config/i18n'
import { nameSpaceConfig } from '../../config/nameSpace'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { submitFeedback } from '../../lib/firebaseResult.js'
import { useRouter } from 'next/router'
import { useGoogleReCaptcha, GoogleReCaptcha } from 'react-google-recaptcha-v3';


function Feedback({ t, i18n }) {
  const height = use100vh()
  const { language } = i18n
  const router = useRouter()
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [config, setConfig] = useState([])
  const [validated, setValidated] = useState(false)
  const [formValue, setFormValue] = useState({})

  

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget

    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      await submitFeedback(formValue)
      router.push('/')
    }
    setValidated(true)
  }


  const clickHandler = useCallback(async () => {
    console.log(executeRecaptcha)
    if (!executeRecaptcha) {
      return;
    }

    const result = await executeRecaptcha('dynamicAction');

    console.log(result)

  }, []);

  const handleReCaptchaVerify = useCallback(
    () => {

    }, []
  );

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
              <Form.Control required type="name" name="name" onKeyUp={(e) => handleChange(e)} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>{config.email}</Form.Label>
              <Form.Control required type="email" name="email" placeholder="name@example.com" onKeyUp={(e) => handleChange(e)} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>{config.feedback}</Form.Label>
              <Form.Control required name="feedback" as="textarea" rows={3} onKeyUp={(e) => handleChange(e)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              {config.submit}
            </Button>

          </Form>
          <button onClick={clickHandler}>Run verify</button>
          <GoogleReCaptcha
            onVerify={handleReCaptchaVerify}
          />
        </Fragment>
      </CustomContainer>
    </Fragment>
  )
}

Feedback.getInitialProps = async () => ({
  namespacesRequired: nameSpaceConfig.feedback
})

export default withTranslation('feedback')(Feedback)
