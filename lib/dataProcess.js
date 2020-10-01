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

export const getOptions = (id, intent) => {
  let options = []

  options = id === 'stageask' ? defaultOptions() : intent

  return options
}

const defaultOptions = () => {
  return [
    {
      label: '結束',
      value: '結束',
      trigger: 'tail'
    },
    {
      label: '發問',
      value: '發問',
      trigger: 'other'
    }
    ,
    {
      label: '有咩可以問',
      value: '有咩可以問',
      trigger: 'stageintent'
    }
  ]
}
