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
import StaticMessage from './StaticMessage'
import LoadingSpinner from '../Loading/LoadingSpinner'
//import lib
import { defaultOptions } from '../../config/stepOptions'
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
  //hooks
  const intent = useIntentList()
  const steps = useSteps()


  console.log({ steps, intent })

  const getOptions = (id, intent) => {

    const options = id.includes('stageask') ? defaultOptions[id.replace('stageask', '')] : id.includes('stageintent') ? intent[id.replace('stageintent', '')] : ''

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
