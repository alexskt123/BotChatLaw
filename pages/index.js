//import from react
import { Fragment, createElement } from 'react';
//import hooks
import { use100vh } from 'react-div-100vh';
import { useSteps } from '../lib/hooks/useFire'
import { useIntentList } from '../lib/hooks/useFire';
//import components 
import CustomChatBot from '../components/CustomChatBot'
import Others from '../components/Others'
import StepMessage from '../components/StepMessage'
import StepLink from '../components/StepLink'
import StepList from '../components/StepList'
//import lib
import { getOptions } from '../lib/dataProcess';
//export default component
export default function CustomStep() {
  //varibles for component
  const components = {
    "<Others/>": Others,
    "<StepMessage/>": StepMessage,
    "<StepLink/>": StepLink,
    "<StepList/>": StepList
  }
  //hooks
  const height = use100vh()

  const steps = useSteps()
  const intent = useIntentList()
  console.log({ steps, intent })

  //loading
  if (
    steps.length <= 0
    || intent.length < 1
  ) {
    return <div>正在加載中....</div>
  }
  //processing
  steps
    .filter(data => data.component)
    .filter(data => typeof data.component === "string")
    .forEach(data => {
      const componentName = data.component
      const DynamicComponent = components[componentName]
      data.component = createElement(DynamicComponent)
    })

  steps
    .filter(data => data.options)
    .forEach(data => data.options = getOptions(data.id, intent))

  //template
  return (
    <Fragment>
      <CustomChatBot steps={steps} height={`${height}px`} />
    </Fragment>
  )
}
