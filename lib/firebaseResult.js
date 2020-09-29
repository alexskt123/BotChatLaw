import fire from '../config/fire-config';

export const getIntentDoc = async (intentName) => {
  const snapshot = await fire.firestore()
    .collection('Intent')
    .where('name', '==', intentName)
    .limit(1)
    .get()

  let doc = {
    label: intentName
  }

  snapshot.forEach(doc => {
    const { label, explanation, link, options } = doc.data()

    Object.assign(doc, { label, explanation, link, list: options })
  })

  console.log(doc)

  return doc
}

export const getIntentList = async () => {
  const snapshot = await fire.firestore()
    .collection('Intent')
    .orderBy('name')
    .get()

  let intentList = [];

  snapshot.forEach(doc => {
    const { label, name } = doc.data()

    intentList.push(
      {
        label,
        value: name,
        waitAction: true
      }
    )
  })

  return intentList
}

export const getSteps = async () => {

  const snapshot = await fire.firestore()
    .collection('Step')
    .orderBy('id')
    .get()

  let steps = [];

  snapshot.forEach(doc => {
    steps.push(doc.data())
  })


  return steps

}