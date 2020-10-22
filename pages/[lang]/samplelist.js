
import { use100vh } from 'react-div-100vh'
import { Fragment } from 'react'

import { v4 as uuid } from 'uuid'

import ListGroup from 'react-bootstrap/ListGroup'

import PageLoading from '../../components/Loading/PageLoading'
import CustomContainer from '../../components/CustomContainer'
import { sampleListItems, customTemplate } from '../../config/sampleList'
import Swal from 'sweetalert2'

import Button from 'react-bootstrap/Button'
import { withTranslation, Router, i18n } from '../../config/i18n'

const SampleList = ({ t }) => {

  const height = use100vh()

  const templateValues = {}
  const template = { ...customTemplate }

  const backAndForth = async (steps, stepLabels, item) => {

    const swalQueueStep = Swal.mixin({
      confirmButtonText: t('backAndForth.continue'),
      cancelButtonText: t('backAndForth.back'),
      progressSteps: steps,
      input: 'text',
      inputAttributes: {
        required: true
      },
      reverseButtons: true,
      validationMessage: t('backAndForth.validationMsg')
    })

    const values = []
    let stepValues = []
    let currentStep

    stepValues = Object.values(template[item].defaultSample)

    for (currentStep = 0; currentStep < steps.length;) {
      const result = await swalQueueStep.fire({
        title: t(`${item}.stepLabels.${currentStep}.title`),
        text: t(`${item}.stepLabels.${currentStep}.text`),
        inputValue: stepValues[currentStep],
        input: 'text',
        showCancelButton: currentStep > 0,
        currentProgressStep: currentStep
      })

      if (result.value) {
        //their use
        stepValues[currentStep] = result.value
        // my use
        values[currentStep] = {
          [stepLabels[currentStep].name]: result.value
        }
        currentStep++
      } else if (result.dismiss === 'cancel') {
        currentStep--
      } else {
        break
      }
    }

    if (currentStep === steps.length) {
      // Swal.fire(JSON.stringify(values))
      values.map(item => {
        Object.assign(templateValues, item)
      })

      const { language } = i18n

      Router.push(
        {
          pathname: `/${language}/sample`,
          query: {
            template: item,
            ...templateValues
          }
        }
      )
    }
  }

  const setBackAndForth = async (item) => {
    const { steps, stepLabels } = template[item]

    await backAndForth(steps, stepLabels, item)
  }

  if (!height || !sampleListItems) return <PageLoading />

  return (
    <Fragment>
      <CustomContainer style={{ minHeight: height }}>
        <ListGroup variant={'outline-dark'}>
          {sampleListItems.map(item => {
            return (
              <ListGroup.Item
                key={uuid()}
                style={{ display: 'flex' }}
              >
                <a key={uuid()} href={item.href} style={{ alignSelf: 'center' }} >
                  {t(`${item.value}.label`)}
                </a>
                <Button
                  variant='outline-dark'
                  style={{ alignSelf: 'center', fontSize: 'xx-small', marginLeft: '10px' }}
                  onClick={() => { setBackAndForth(item.value) }}
                >
                  {t('backAndForth.customButton')}
                </Button>
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </CustomContainer>
    </Fragment>
  )
}

SampleList.getInitialProps = async () => ({
  namespacesRequired: ['header', 'sampleList', 'settings', 'chatBot']
})

export default withTranslation('sampleList')(SampleList)
