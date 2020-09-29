
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
