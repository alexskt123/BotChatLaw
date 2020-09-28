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