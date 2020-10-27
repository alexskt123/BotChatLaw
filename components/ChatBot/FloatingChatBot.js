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
  //hooks
  const intent = useIntentList()
  const steps = useSteps()
  const store = useContext(Store)
  const { dispatch } = store


  console.log({ steps, intent })

  useEffect(() => {
    if (!(steps.length <= 0
      || Object.keys(intent).length < 1)) {
      console.log({ steps, intent })
      dispatch({
        type: 'STEP', payload: { steps, intent }
      })
    }
  }, [steps, intent])

  //loading
  if (
    steps.length <= 0
    || Object.keys(intent).length < 1
  ) {
    return (
      <LoadingSpinner />
    )
  }

  //processing
  steps
    .filter(data => data.component)
    .filter(data => typeof data.component === 'string')
    .forEach(data => {
      const componentName = data.component
      const DynamicComponent = components[componentName]
      data.component = createElement(DynamicComponent)
    })

  //template
  return (
    <Fragment>
      <CustomChatBot />
    </Fragment>
  )
}
