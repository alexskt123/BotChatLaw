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
      },
      list: [...response.data.list]
    }
  }

  return intentDoc
}

export const getContent = (content, language) => {
  if (content === undefined) {
    return content
  }
  else if (typeof content === 'string') {
    return content
  }
  else {
    return content[language]
  }
}

export const randomMsg = array => {
  const randomIdx = Math.floor(Math.random() * array.length)
  return array[randomIdx]
}

export const getTop = (summary, limit) => {
  const arr = Object.keys(summary).reduce((acc, cur) => {
    acc.push({ label: cur, value: summary[cur] })
    return acc
  }, [])

  let sorted = arr
    .sort((a, b) => {
      return b.value - a.value
    })

  let top = sorted
    .filter((_, idx) => {
      return idx < limit
    })

  return top
}

const getOptions = (id, intent) => {

  const options = id.includes('stageask') ? defaultOptions[id.replace('stageask', '')] : id.includes('stageintent') ? intent[id.replace('stageintent', '')] : ''

  return options
}

export const stepsWithIntent = ({ steps, intent }) => {
  const newSteps = [...steps]
  newSteps
    .filter(data => data.options)
    .forEach(data => data.options = getOptions(data.id, intent))

  return newSteps
}
