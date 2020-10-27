//import from react
import { Fragment, createElement, useEffect, useContext } from 'react'
//import hooks
import { useSteps } from '../../lib/hooks/useFire'
import { useIntentList } from '../../lib/hooks/useFire'
//import components 
import CustomChatBot from '../ChatBot/CustomChatBot'
import Others from './Others'
import StepMessage from './StepMessage'
import StepLink from './StepLink'
import StepList from './StepList'
import ContactUs from '../ContactUs'
import StaticMessage from './StaticMessage'
import LoadingSpinner from '../Loading/LoadingSpinner'
//import lib
import { useTranslation } from '../../config/i18n'
import { defaultOptions } from '../../config/stepOptions'
import { Store } from '../../lib/store'
//export default component
export default function FloatingChatBot() {
  //varibles for component
  const components = {
    '<Others/>': Others,
    '<StepMessage/>': StepMessage,
    '<StepLink/>': StepLink,
    '<StepList/>': StepList,
    '<ContactUs/>': ContactUs,
    '<StaticMessage/>': StaticMessage
  }

  const getOptions = (id, intent) => {
    let translatedOptions = []
    defaultOptions.map((item, idx) => {
      translatedOptions.push(
        {
          ...t(`defaultOptions.${idx}`, { returnObjects: true }),
          trigger: item.trigger
        }
      )
    })

    let options = []
    options = id === 'stageask' ? translatedOptions : intent

    return options
  }
  //hooks
  const steps = useSteps()
  const intent = useIntentList()
  const { t } = useTranslation('stepOptions')

  const store = useContext(Store)
  const { dispatch } = store

  useEffect(() => {
    steps
      .filter(data => data.options)
      .forEach(data => data.options = getOptions(data.id, intent))

    //processing
    steps
      .filter(data => data.component)
      .filter(data => typeof data.component === 'string')
      .forEach(data => {
        const componentName = data.component
        const DynamicComponent = components[componentName]
        data.component = createElement(DynamicComponent)
      })

    if (!(steps.length <= 0
      || intent.length < 1)) {
      console.log({ steps, intent })
      dispatch({
        type: 'STEP', payload: { steps: [...steps] }
      })
    }
  }, [steps, intent])

  //loading
  if (
    steps.length <= 0
    || intent.length < 1
  ) {
    return (
      <LoadingSpinner />
    )
  }

  //template
  return (
    <Fragment>
      <CustomChatBot />
    </Fragment>
  )
}
