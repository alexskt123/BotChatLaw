
import { use100vh } from 'react-div-100vh'
import { Fragment } from 'react'
import { useRouter } from 'next/router'

import { v4 as uuid } from 'uuid'

import ListGroup from 'react-bootstrap/ListGroup'

import PageLoading from '../components/Loading/PageLoading'
import CustomContainer from '../components/CustomContainer'
import { sampleListItems } from '../config/sampleList'
import Swal from 'sweetalert2'

import Button from 'react-bootstrap/Button'

export default function SampleList() {

  const height = use100vh()  
  const router = useRouter()

  const templateValues = {}
  const template = {
    EmploymentContract: {
      steps: ['1', '2', '3', '4', '5', '6', '7', '8'],
      stepLabels: [
        {
          title: '開始日期',
          text: '',
          name: 'startSate'
        },
        {
          title: '僱員名稱',
          text: '如：Chan Tai Man',
          name: 'eeName'
        },
        {
          title: '僱主名稱',
          text: '如：God Bless Trump Company',
          name: 'erName'
        },
        {
          title: '職位',
          text: '如：Analyst',
          name: 'jobTitle'
        },
        {
          title: '試用期',
          text: '如：3個月',
          name: 'probation'
        },
        {
          title: '薪金',
          text: '如：50000',
          name: 'salary'
        },
        {
          title: '年假',
          text: '如：10日',
          name: 'annualLeave'
        },
        {
          title: '通知期',
          text: '如：3個月',
          name: 'noticePeriod'
        }
      ]
    },
    Will: {
      steps: ['1', '2', '3', '4'],
      stepLabels: [
        {
          title: '遺囑人姓名',
          text: '如：Chan Tai Man',
          name: 'testatorName'
        },
        {
          title: '遺囑人身份證號碼',
          text: '如：A123456(7)',
          name: 'testatorID'
        },
        {
          title: '遺囑人地址',
          text: '如：GRAND MILLENNIUM PLAZA, COSCO TOWER',
          name: 'testatorAddr'
        },
        {
          title: '剩餘遺產受益人',
          text: 'Chan Siu Man',
          name: 'residue'
        }
      ]
    }
  }  
  
  const backAndForth = async (steps, stepLabels, item) => {
  
    const swalQueueStep = Swal.mixin({
      confirmButtonText: 'Forward',
      cancelButtonText: 'Back',
      progressSteps: steps,
      input: 'text',
      inputAttributes: {
        required: true
      },
      reverseButtons: true,
      validationMessage: 'This field is required'
    })
  
    const values = []
    const stepValues = []
    let currentStep
  
    for (currentStep = 0; currentStep < steps.length;) {
      const result = await swalQueueStep.fire({
        title: stepLabels[currentStep].title,
        text: stepLabels[currentStep].text,
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
      
      router.push(
        {
          pathname: '/sample',
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
                  {item.label}
                </a>
                <Button
                  variant='outline-dark'
                  style={{ alignSelf: 'center', fontSize: 'xx-small', marginLeft: '10px' }}
                  onClick={() => { setBackAndForth(item.value) }}
                >
                  自訂
                </Button>
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </CustomContainer>
    </Fragment>
  )
}