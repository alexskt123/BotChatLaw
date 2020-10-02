
import { setRequest } from './firebaseResult'

export const setRequestByInput = async (input , intent) => {
  await setRequest(input, intent)
 
}
