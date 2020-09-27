import { useState, useEffect } from 'react';
import {getSteps} from '../lib/firebaseResult';



export default function Steps() {

  const [data, setData] = useState(null)

  useEffect(() => {
    (async () => {

      let fireStep = await getSteps()

      setData(fireStep)
    })()
  }, [])

  return (

      data     
  );

}