import axios from 'axios'
import { getIntent } from './dataProcess'
import { getIntentDoc } from './firebaseResult'

export const getIntentByQuery = async query => {
  const response = await axios(`/api/wit/getMessage?query=${query}`)
  const intent = getIntent(response.data)
  const intentDoc = await getIntentDoc(intent)

  return { intent, doc: intentDoc }
}
