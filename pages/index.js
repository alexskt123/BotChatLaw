// import from react
import { useState, useEffect, Fragment, createElement } from 'react';
//import hooks
import { use100vh } from 'react-div-100vh';
//import components
import CustomChatBot from '../components/CustomChatBot'
import Others from '../components/Others'
import StepMessage from '../components/StepMessage'
import StepLink from '../components/StepLink'
//import lib
import { getSteps } from '../lib/firebaseResult';
//export default component
export default function CustomStep() {
  //varibles for component
  const components = {
    "<Others/>": Others,
    "<StepMessage/>": StepMessage,
    "<StepLink/>": StepLink
  }
  //hooks
  const [datas, setData] = useState([])
  const height = use100vh()
  //side effect
  useEffect(() => {
    //async side effect must use IIFE(Immediately Invoked Function Expression)
    (async () => {
      let fireStep = await getSteps()
      setData(fireStep)
    })()
  }, [])
  //loading
  if (datas.length <= 0) {
    return <div>正在加載中....</div>
  }
  //processing
  datas
    .filter(data => data.component)
    .filter(data => typeof data.component === "string")
    .forEach(data => {
      const componentName = data.component
      const DynamicComponent = components[componentName]
      data.component = createElement(DynamicComponent)
    })
  //template
  return (
    <Fragment>
      <CustomChatBot steps={datas} height={`${height}px`} />
    </Fragment>
  )
}
