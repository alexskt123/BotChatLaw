
import { useState, useEffect } from 'react';
import {getIntentCollection} from '../lib/firebaseResult';
import {getIntent} from '../lib/dataProcess';
import axios from 'axios'




export default function StepMessage (steps ) {

  const { other: step} = steps.steps;
  const { value: StepValue } = step


  const [data, setData] = useState(null)

  useEffect(() => {
    (async () => {


      const response = await axios(`/api/wit/getMessage?query=${StepValue}`)
      const intent = await getIntent(response.data)  


      const intentCollection = await getIntentCollection(intent)

      let intentExplanation

      if (intentCollection && intentCollection.explanation) {
        intentExplanation = `${intentCollection.explanation}`
      }
      else {
        intentExplanation = '不解釋....'
      }

      if (intentCollection && intentCollection.link && intentCollection.link.length >= 1) {
        steps.triggerNextStep({trigger: 'otherlink'})
      }
      else {
        steps.triggerNextStep({trigger: '0'})
      }      


      setData(intentExplanation)
    })()
  }, [])

  return (
    <div style={{ width: '100%' }}>
      {data}
    </div>
  );
}
