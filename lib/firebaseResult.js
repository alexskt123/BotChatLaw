import fire from '../config/fire-config'

const getIntentDocObj = async (intentData, relationData, intentName) => {
  let intentDoc = {
    label: intentName
  }

  intentData.forEach(doc => {
    const { label, explanation, link } = doc.data()
    let parent
    let list

    // get parent/relation
    let relationList = []
    relationData.forEach(relation => {
      relationList.push(relation.data())
    })

    // this intent is a parent (from other records), only get the child list from itself
    if (relationList.find(x => x.parent == intentName)) {
      list = []
      relationList
        .filter(relation => relation.parent == intentName)
        .find(x => x)
        .child
        .forEach(item => {
          list.push(
            item
          )
        })
    }
    //if this intent is not a parent, put its parent's list
    else {
      list = []
      parent = relationList.parent

      relationList
        .forEach(relation => {
          if (relation.child.filter(childitem => childitem.value == intentName).length > 0) {
            relation.child.forEach(item => {
              list.push(
                item
              )
            })
            list.push(
              {
                value: relation.parent,
                label: relation.label
              }
            )
          }
        })
    }

    Object.assign(intentDoc, { label, explanation, link, list, parent })
  })

  return intentDoc
}


export const getIntentDoc = async (intentName) => {
  const intentData = await fire.firestore()
    .collection('Intent')
    .where('name', '==', intentName)
    .limit(1)
    .get()

  const relationData = await fire.firestore()
    .collection('Relation')
    .get()

  let intentDoc = await getIntentDocObj(intentData, relationData, intentName)

  let docListIntent
  if (intentDoc.list) {
    for (const docList of intentDoc.list) {
      docListIntent = await fire.firestore()
      .collection('Intent')
      .where('name', '==', docList.value)
      .limit(1)
      .get()

      docListIntent.forEach(DocListIntentData => {
        docList.label = DocListIntentData.data().label
      })
    }
  }


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