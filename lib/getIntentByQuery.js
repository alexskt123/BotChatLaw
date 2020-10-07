import axios from 'axios'
import { getIntent , getWikiTitle , getWikiInfo } from './dataProcess'
import { getIntentDoc } from './firebaseResult'

export const getIntentByQuery = async query => {
  const response = await axios(`/api/wit/getMessage?query=${query}`)
  const witIntent = getIntent(response.data)  
  let intentDoc = {}

  if (!witIntent) {
    intentDoc.intent = await getWikiTitle (query)
    intentDoc.doc = await getWikiInfo (query)
  } else {
    intentDoc.intent = witIntent
    intentDoc.doc = await getIntentDoc(witIntent)
  }

  return intentDoc
}
