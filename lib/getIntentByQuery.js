import axios from 'axios'
import { getIntent , getWikiTitle , getWikiInfo } from './dataProcess'
import { getIntentData } from './firebaseResult'
import IntentData from './data/intentData'

export const getIntentByQuery = async query => {
  const response = await axios(`/api/wit/getMessage?query=${query}`)
  const witIntent = getIntent(response.data)  
  let intentData = {...IntentData}

  if (!witIntent) {
    intentData.intent = await getWikiTitle (query)
    intentData.doc = await getWikiInfo (query)
  } else {
    intentData = await getIntentData(witIntent)
  }

  return intentData
}
