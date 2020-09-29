//import from react
import { Fragment, createElement } from 'react';
//import hooks
import { use100vh } from 'react-div-100vh';
import { useSteps } from '../lib/hooks/useFire'
//import components
import CustomChatBot from '../components/CustomChatBot'
import Others from '../components/Others'
import StepMessage from '../components/StepMessage'
import StepLink from '../components/StepLink'
import Options from '../components/Options'
//export default component
export default function CustomStep() {
  //varibles for component
  const components = {
    "<Others/>": Others,
    "<StepMessage/>": StepMessage,
    "<StepLink/>": StepLink
  }
  //hooks
  const steps = useSteps()
  console.log({ steps })
  const height = use100vh()
  //loading
  if (steps.length <= 0) {
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
    .filter(data => data.options !== undefined)
    .forEach(data => {
      data.options = Options (data.id)
    })
  //template
  return (
    <Fragment>
      <CustomChatBot steps={steps} height={`${height}px`} />
    </Fragment>
  )
}
