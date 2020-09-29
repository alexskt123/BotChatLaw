//import from react
import { useEffect, useState } from "react";

//import from firebase to get intent and collection of it
import { getIntentCollection } from '../../lib/firebaseResult';
import { getIntent } from '../../lib/dataProcess';

//import from axios for api purpose
import axios from 'axios'

//export custom hook
export const useInfo = (infoType, steps, stepValue) => {

  const [intentInfo, setIntentInfo] = useState(null)


  useEffect(() => {
    (async () => {

      // pass step value to wit to get what the guy wants
      const response = await axios(`/api/wit/getMessage?query=${stepValue}`)
      const intent = await getIntent(response.data)

      // response from wit
      const intentCollection = await getIntentCollection(intent)

      let intentInfo


      if (infoType === "componentOther") {

        if (intentCollection && intentCollection.label) {
          intentInfo = `我估你嘅意思係: ${intentCollection.label}`
        }
        else {
          intentInfo = '搵唔到....'
        }
  
        if (intentCollection && intentCollection.explanation) {
          steps.triggerNextStep({trigger: 'otherdetail' , value: `${intent}`})
        }
        else if (intent === 'Bye') {
          steps.triggerNextStep({trigger: 'tail'})
        }
        else {
          steps.triggerNextStep({trigger: 'head'})
        }

        setIntentInfo(intentInfo)
  
      }
      else if (infoType === "stepMessage") {
        if (intentCollection && intentCollection.explanation) {
          intentInfo = `${intentCollection.explanation}`
        }
        else {
          intentInfo = '不解釋....'
        }
  
        if (intentCollection && intentCollection.link && intentCollection.link.length >= 1) {
          steps.triggerNextStep({trigger: 'otherlink' , value: `${intent}`})
        }
        else {
          steps.triggerNextStep({trigger: 'head'})
        }      
  
  
        setIntentInfo(intentInfo)
      }
      else if (infoType === "stepLink") {
        if (intentCollection && intentCollection.link) {
          intentInfo = intentCollection.link
        }

        if (intentCollection && intentCollection.list) {
  
          steps.triggerNextStep({trigger: 'otherlist' , value: `${intent}`})
        }
        else
          steps.triggerNextStep({ trigger: 'head' })
  
        setIntentInfo(intentInfo)
      }
      else if (infoType === "stepList") {
        if (intentCollection && intentCollection.list) {
          intentInfo = intentCollection.list
          
        }
        // steps.triggerNextStep({trigger: 'head'})

  
        setIntentInfo(intentInfo)
      }
      else {
        setIntentInfo ('')
      }

    })()
  }, [])

  return intentInfo
}
