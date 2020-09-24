import { useState, useEffect } from 'react';
import axios from 'axios'

const getInent = (data) => {
  if (!data) return "loading..."

  if (data.intents) {
    const intent = data.intents.find(x => x)

    if (intent) {
      return intent.name
    }
  }

  return 'no result.....'
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
    <div style={{ backgroundColor: '#fffbc9', width: '100%' }}>
      {getInent(data)}
    </div>
  );
}
