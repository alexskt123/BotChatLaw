//import from react
import { Fragment, createElement } from 'react'
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
import LoadingSpinner from '../Loading/LoadingSpinner'
//import lib
import { useTranslation } from '../../config/i18n'
import { defaultOptions } from '../../config/stepOptions'
//export default component
export default function FloatingChatBot() {
  //varibles for component
  const components = {
    '<Others/>': Others,
    '<StepMessage/>': StepMessage,
    '<StepLink/>': StepLink,
    '<StepList/>': StepList,
    '<ContactUs/>': ContactUs
  }
  //hooks
  const steps = useSteps()
  const intent = useIntentList()
  const { t } = useTranslation('stepOptions');

  console.log({ steps, intent })

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
      <CustomChatBot steps={steps} />
    </Fragment>
  )
}
