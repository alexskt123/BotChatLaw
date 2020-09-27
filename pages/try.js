//import Steps from '../components/Steps';
import { Fragment } from 'react';

import { useState, useEffect } from 'react';
import {getSteps} from '../lib/firebaseResult';

export default function Try() {

  const [datas, setData] = useState([])


  const listBlogs = () => {

    if (datas.length <= 0) {
        console.log('a')
    }

    return datas.map(data => {
      
      return (
        <pre key={data.id}>{JSON.stringify(data, null, 2)}</pre>
      )
    })
  }


  useEffect(() => {
    (async () => {

      

      let fireStep = await getSteps()

      let fireStepList = fireStep

      setData(fireStepList)
    })()
  }, [])


  return (
    <Fragment>
      {listBlogs()}
    </Fragment>
  )
}

