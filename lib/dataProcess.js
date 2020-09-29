
import { v4 as uuid } from 'uuid'

export const getIntent = async (data) => {

  if (!data) return ""

  if (data.intents) {

    const intent = data.intents.find(x => x)

    if (intent) {

      return intent.name
    }
  }

  return ''

  // if (!data) return "搵緊..."

  // if (data.intents) {
  //   const intent = data.intents.find(x => x)

  //   if (intent) {
  //     return '我估你嘅意思係' + intent.name
  //   }
  // }

  // return '搵唔到.....'
}

export const getDataPopulate = (data) => {
  if (!data) {
    return (
      <div style={{ width: '100%' }}>
        搵緊...
    </div>
    )
  }

  return (
    <div style={{ width: '100%' }}>
      {data}
    </div>
  )
}


export const getLinks = (links) => {


  if (!links) {
    return <div>搵緊...</div>
  }

  return links.map(link => {

    return (
      <div style={{ color: 'blue' }} key={uuid()}>
        <li ><a href={link.href} target="_blank">{link.label}</a></li>
      </div>

    )
  })

}
