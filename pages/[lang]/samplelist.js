
import { use100vh } from 'react-div-100vh'
import { Fragment } from 'react'
import Link from 'next/link'

import ListGroup from 'react-bootstrap/ListGroup'

import PageLoading from '../../components/Loading/PageLoading'
import CustomContainer from '../../components/CustomContainer'
import { sampleListItems, customTemplate } from '../../config/sampleList'
import Swal from 'sweetalert2'

import Button from 'react-bootstrap/Button'
import { withTranslation, Router, i18n } from '../../config/i18n'
import { nameSpaceConfig } from '../../config/nameSpace'

const SampleList = ({ t }) => {

  const height = use100vh()

  const templateValues = {}
  const template = { ...customTemplate }

  const { language } = i18n

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
          {sampleListItems.map((item, idx) => {
            return (
              <ListGroup.Item
                key={`${idx}`}
                style={{ display: 'flex' }}
              >
                <Link key={`${idx}`} href={`/${language}${item.href}`} style={{ alignSelf: 'center' }} >
                  {t(`${item.value}.label`)}
                </Link>
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
  namespacesRequired: nameSpaceConfig.samplelist
})

export default withTranslation('sampleList')(SampleList)
