import { useState, useEffect } from 'react';
import {getIntentLabel} from '../lib/firebaseResult';
import {getIntent} from '../lib/dataProcess';
import axios from 'axios'



export default function Others({ steps }) {

  const { other: step } = steps;
  const { value: StepValue } = step

  const [data, setData] = useState(null)

  useEffect(() => {
    (async () => {
      const response = await axios(`/api/wit/getMessage?query=${StepValue}`)
      const intent = await getIntent(response.data)

       
      let intentLabel = await getIntentLabel(intent)


      if (intentLabel) {
        intentLabel = `我估你嘅意思係: ${intentLabel}`
      }
      else {
        intentLabel = '搵唔到....'
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
