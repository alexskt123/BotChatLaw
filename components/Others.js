import { useState, useEffect } from 'react';
import axios from 'axios'

const getInent = (data) => {
  if (!data) return "搵緊..."

  if (data.intents) {
    const intent = data.intents.find(x => x)

    if (intent) {
      return '我估你嘅意思係' + intent.name
    }
  }

  return '搵唔到.....'
}

export default function Others({ steps }) {

  const { other: step } = steps;
  const { value: StepValue } = step

  const [data, setData] = useState(null)

  useEffect(() => {
    (async () => {
      const response = await axios(`/api/wit/getMessage?query=${StepValue}`)

      setData(response.data)
    })()
  }, [])

  return (
    <div style={{ width: '100%' }}>
      {getInent(data)}
    </div>
  );
}
