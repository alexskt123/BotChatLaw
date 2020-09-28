
import { useState, useEffect } from 'react';

import { getSteps } from '../lib/firebaseResult';
import React from 'react';
import Others from '../components/Others'
import StepMessage from '../components/StepMessage'
import StepLink from '../components/StepLink'
import CustomChatBot from '../components/CustomChatBot'
 
export default function CustomStep() {

  const [datas, setData] = useState([])

  const steps = () => {

    if (datas.length <= 0) {
      return <div>正在加載中....</div>
    }
    
    datas.find(data => data['component'] !== undefined && data.component == "<Others/>").component = <Others />
    datas.find(data => data['component'] !== undefined && data.component == "<StepMessage/>").component = <StepMessage/>
    datas.find(data => data['component'] !== undefined && data.component == "<StepLink/>").component = <StepLink/>
  
    return CustomChatBot(datas)
  }

  useEffect(() => {
    (async () => {
      let fireStep = await getSteps()
      setData(fireStep)
    })()
  }, [])


  return (
    steps()
  )
}
