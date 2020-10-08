import axios from 'axios'
import { defaultOptions } from '../config/stepOptions'

export const getIntent = (data) => {
  if (!data) return ''

  if (data.intents) {
    const intent = data.intents.find(x => x)

    if (intent) {
      return intent.name
    }
  }

  return ''
}

export const getWikiTitle = async (query) => {
  if (!query) return ''

  const response = await axios(`/api/wiki/getData?query=${query}`)

  if (response) {
    return response.data.title || ''
  }    
}

export const getWikiInfo = async (query) => {
  const response = await axios(`/api/wiki/getData?query=${query}`)  
  let intentDoc

  if (response && response.data.extract) {
    intentDoc = {
      label: response.data.title,
      name: response.data.title,
      explanations: {
        header: '',
        list: [response.data.extract]
      }
    }
  }  

  return intentDoc
}

export const getOptions = (id, intent) => {
  let options = []

  options = id === 'stageask' ? [...defaultOptions] : intent

  return options
}

export const randomMsg = array => {
  const randomIdx = Math.floor(Math.random() * array.length)
  return array[randomIdx]
}
