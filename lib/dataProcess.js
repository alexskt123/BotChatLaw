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
