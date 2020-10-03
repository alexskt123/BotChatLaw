import fire from '../config/fire-config'

export const setRequest = async (input, intent) => {
  const myTimestamp = fire.firestore.Timestamp.now().toDate()

  const data = {
    input: input,
    intent: intent,
    time: myTimestamp
  }

  fire.firestore()
    .collection('Request')
    .add(data)
}

export const getIntentDoc = async (intentName) => {
  const intentSnapShot = await fire.firestore()
    .collection('Intent')
    .where('name', '==', intentName)
    .limit(1)
    .get()

  let intentDoc = {
    link: [],
    list: []
  }

  let childrenNames = ['']
  intentSnapShot.forEach(doc => {
    const temp = doc.data()

    intentDoc = temp
    //where in cannot be all empty so use ['']
    childrenNames = temp.children || ['']
  })

  const childrenSnapShot = await fire.firestore()
    .collection('Intent')
    .where('name', 'in', childrenNames)
    .get()

  let list = []
  childrenSnapShot.forEach(doc => {
    const { label, name: value } = doc.data()
    list.push({ label, value })
  })

  Object.assign(intentDoc, { list })

  console.log({ intentDoc })
  return intentDoc
}

export const getIntentList = async () => {
  const snapshot = await fire.firestore()
    .collection('Intent')
    .orderBy('name')
    .get()

  let intentList = []

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

  let steps = []

  snapshot.forEach(doc => {
    steps.push(doc.data())
  })


  return steps

}