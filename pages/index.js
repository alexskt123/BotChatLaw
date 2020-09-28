// import from react
import { useState, useEffect, Fragment } from 'react';
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
  datas.find(data => data['component'] !== undefined && data.component == "<Others/>").component = <Others />
  datas.find(data => data['component'] !== undefined && data.component == "<StepMessage/>").component = <StepMessage />
  datas.find(data => data['component'] !== undefined && data.component == "<StepLink/>").component = <StepLink />
  //template
  return (
    <Fragment>
      <CustomChatBot steps={datas} height={`${height}px`} />
    </Fragment>
  )
}
