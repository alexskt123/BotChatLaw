import fire from '../config/fire-config';

export const getIntentCollection = async (intentName) => {

  const snapshot = await fire.firestore()
    .collection('Intent')
    .where('name', '==', intentName)
    .limit(1)
    .get()

  let collection = {};

  collection['label'] = intentName;

  snapshot.forEach(doc => {
    collection.label = doc.data().label
    collection.explanation = doc.data().explanation
    collection.link = doc.data().link
  })

  return collection

}

export const getIntentList = async () => {
  const snapshot = await fire.firestore()
    .collection('Intent')
    .orderBy('name')
    .get()
  
  let intentList = [];

  snapshot.forEach(doc => {
    intentList.push(
      {
        label: doc.data().label,
        value: doc.data().name,              
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