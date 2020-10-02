import fire from '../config/fire-config'

const getIntentDocObj = async (intentData, relationData, intentName) => {
  let intentDoc = {
    label: intentName
  }

  intentData.forEach(doc => {
    const { label, explanation, link } = doc.data()
    let parent
    let listIntent

    // get parent/relation
    let relationList = []
    relationData.forEach(relation => {
      relationList.push(relation.data())
    })

    // this intent is a parent (from other records), only get the child list from itself
    if (relationList.find(x => x.parent == intentName)) {
      listIntent = []
      relationList
        .filter(relation => relation.parent == intentName)
        .find(x => x)
        .child
        .forEach(item => {
          listIntent.push(
            item
          )
        })
    }
    //if this intent is not a parent, put its parent's list
    else {
      listIntent = []
      parent = relationList.parent

      let parentparent

      relationList
        .forEach(relation => {
          if (relation.child.filter(childitem => childitem == intentName).length > 0) {
            relation.child.forEach(item => {
              listIntent.push(
                item
              )
            })
            parentparent = relation.parent
          }
        })

      // push all parent's parents to the list
      while (parentparent) {
        listIntent.push(
          parentparent
        )
        parentparent = (relationList.find(x => x.child.indexOf(parentparent) >= 0) || {parent: null}).parent
      }
    }

    Object.assign(intentDoc, { label, explanation, link, listIntent, parent })
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
  if (intentDoc.listIntent && intentDoc.listIntent.length > 0) {

    docListIntent = await fire.firestore()
      .collection('Intent')
      .where('name', 'in', intentDoc.listIntent)
      .get()

    let list = []
    docListIntent.forEach(DocListIntentData => {
      list.push(
        {
          label: DocListIntentData.data().label,
          value: DocListIntentData.data().name
        }
      )
    })

    if (list) {
      list.sort(function(a, b) {
        return intentDoc.listIntent.indexOf(a.value) - intentDoc.listIntent.indexOf(b.value);
      });
      intentDoc.list = list
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