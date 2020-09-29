
import { v4 as uuid } from 'uuid'

const loadingMsg = '幫緊你幫緊你...'

export const getIntent = async (data) => {

  if (!data) return ""

  if (data.intents) {

    const intent = data.intents.find(x => x)

    if (intent) {

      return intent.name
    }
  }

  return ''
}

export const getDataPopulate = (data) => {
  if (!data) {
    return (
      <div style={{ width: '100%' }}>
        {loadingMsg}
      </div>
    )
  }

  return (
    <div style={{ width: '100%' }}>
      {data}
    </div>
  )
}

export const getStepValue = (steps) => {

  let StepValue

  if (steps.previousStep) {
    StepValue = steps.previousStep.value
  }

  return StepValue
}

export const getList = (list, steps) => {


  if (!list) {
    return <div>
      {loadingMsg}
    </div>
  }

  return list.map(item => {

    return (

      <button class={"sc-hKFyIo fjCELo rsc-os-option-element"}
        style={{ boxShadow: 'rgb(158, 158, 158) 1px 2px 5px' }}
        onClick={() => steps.triggerNextStep({trigger: `${item.trigger}`, value: `${item.value}`})}>
        {item.label}
      </button>


    )
  })

}


export const getLinks = (links) => {


  if (!links) {
    return <div>
      {loadingMsg}
    </div>
  }

  return links.map(link => {

    return (
      <div style={{ color: 'blue' }} key={uuid()}>
        <li ><a href={link.href} target="_blank">{link.label}</a></li>
      </div>

    )
  })

}

export const getOptions = (id, intent) => {
  let options = []

  options = id === 'stageask' ? defaultOptions() : intent

  return options
}

const defaultOptions = () => {
  return [
    {
      label: "結束",
      value: "結束",
      trigger: "tail"
    },
    {
      label: "發問",
      value: "發問",
      trigger: "other"
    }
    ,
    {
      label: "有咩可以問",
      value: "有咩可以問",
      trigger: "stageintent"
    }
  ]
}
