
import { useState, useEffect } from 'react';
import axios from 'axios'
import useSWR from 'swr'
const fetcher = url => axios.get(url).then(res => res.data)


const getInent = (data) => {

  if (data.intents) {
    const intent = data.intents.find(x => x)

    if (intent) {
      return intent.name
    }
  }

  return 'no result.....'

}


export default function Others({steps}) {

  const {other:step} = steps;
  const { data, error } = useSWR(`/api/wit/getMessage?query=${step.value}`, fetcher)

  if (!data) return <div style={{ backgroundColor: '#fffbc9', width: '100%' }}>loading...</div>

  return (
    <div style={{ backgroundColor: '#fffbc9', width: '100%' }}>
      {getInent(data)}
    </div>
  );

}

