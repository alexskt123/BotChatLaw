import fire from '../config/fire-config'
import IntentData from '../lib/data/intentData'

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

  const increment = fire.firestore.FieldValue.increment(1)

  fire.firestore()
    .collection('Request')
    .doc('summary')
    .set({ [input]: increment }, { merge: true })
}

export const submitFeedback = async (feedback) => {
  const myTimestamp = fire.firestore.Timestamp.now().toDate()

  const data = {
    ...feedback,
    time: myTimestamp
  }

  fire.firestore()
    .collection('Feedback')
    .add(data)
}

export const getIntentData = async (intentName) => {

  let intentData = { ...IntentData }
  let intentDoc = {
    link: [],
    list: []
  }

  const intentSnapShot = await fire.firestore()
    .collection('Intent')
    .where('name', '==', intentName)
    .limit(1)
    .get()


  let childrenNames = ['']
  let parentName = ''
  intentSnapShot.forEach(doc => {
    const temp = doc.data()

    intentDoc = temp
    //where in cannot be all empty so use ['']
    childrenNames = temp.children || ['']
    parentName = temp.parent || ''

    intentData.intent = temp.name || null
  })

  const parentSnapShot = await fire.firestore()
    .collection('Intent')
    .where('name', '==', parentName)
    .get()

  parentSnapShot.forEach(doc => {
    const parent = doc.data()

    parent.children.forEach(parentChild => {
      childrenNames.push(parentChild)
    })
    childrenNames.push(parent.name)
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

  // sort in sequence of childrenNames
  list.sort(function (a, b) {
    return childrenNames.indexOf(a.value) - childrenNames.indexOf(b.value)
  })

  Object.assign(intentDoc, { list })
  intentData.doc = intentDoc

  if (intentData.intent === 'Bye') {
    intentData.trigger = 'tail'
  }

  return intentData
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