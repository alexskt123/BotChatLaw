import { useState, useEffect } from 'react';
import {getIntentCollection} from '../lib/firebaseResult';
import {getIntent} from '../lib/dataProcess';
import axios from 'axios'



export default function Others( steps ) {

  const { other: step } = steps.steps;  
  const { value: StepValue } = step

  const [data, setData] = useState(null)

  useEffect(() => {
    (async () => {
      const response = await axios(`/api/wit/getMessage?query=${StepValue}`)
      const intent = await getIntent(response.data)  

      const intentCollection = await getIntentCollection(intent)
      let intentLabel
      

      if (intentCollection && intentCollection.label) {
        intentLabel = `我估你嘅意思係: ${intentCollection.label}`
      }
      else {
        intentLabel = '搵唔到....'
      }

      if (intentCollection && intentCollection.explanation) {
        steps.triggerNextStep({trigger: 'otherdetail'})
      }
      else if (intent === 'Bye') {
        steps.triggerNextStep({trigger: 'tail'})
      }
      else {
        steps.triggerNextStep({trigger: 'head'})
      }

      setData(intentLabel)
    })()
  }, [])

  return (    
    <div style={{ width: '100%' }}>
      {data}
    </div>
  );
}
