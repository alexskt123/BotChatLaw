
import { useState, useEffect, Fragment } from 'react';
import { getIntentCollection } from '../lib/firebaseResult';
import { getIntent } from '../lib/dataProcess';
import axios from 'axios'


export default function StepMessage(steps) {

  const { other: step } = steps.steps;
  const { value: StepValue } = step


  const [links, setData] = useState([])


  const listLinks = () => {


    if (!links) {
      return <div>正在加載中....</div>
    }
 

    return links.map(link => {
        
      return (
        <div style={{color: 'blue'}}>
          <li ><a href={link.href} target="_blank">{link.label}</a></li> 
        </div>
        
      )
    }) 
  }  

  useEffect(() => {
    (async () => {


      const response = await axios(`/api/wit/getMessage?query=${StepValue}`)
      const intent = await getIntent(response.data)


      const intentCollection = await getIntentCollection(intent)

      let IntentLink = []

      

      if (intentCollection && intentCollection.link) {
        IntentLink = intentCollection.link
      }

      steps.triggerNextStep({ trigger: '0' })

      setData(IntentLink)
    })()
  }, [])

  return (
    <Fragment>
      <div style={{ width: '100%' }}>
        <h4>請點擊以下連結以獲取更多的資訊:</h4>
        {listLinks()}
      </div>
    </Fragment>

  );
}
