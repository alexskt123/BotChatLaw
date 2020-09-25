import fire from '../config/fire-config';

export const getIntentLabel = async (intentName) => {

  const snapshot = await fire.firestore()
    .collection('Intent')
    .where('name', '==', intentName)
    .limit(1)
    .get()

  let label;

  label = intentName;

  snapshot.forEach(doc => {
    label = doc.data().label
  })

  return label

}