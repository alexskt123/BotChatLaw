//import from react
import { useEffect, useState } from 'react'
//import lib
import fire from '../../config/fire-config'

import shuffle from 'shuffle-array'

//export custom hook
export const useSteps = () => {
  const [steps, setSteps] = useState([])

  useEffect(() => {
    const unsub = fire
      .firestore()
      .collection('Step')
      .orderBy('id')
      .onSnapshot(snapshot => {
        const temp = []

        snapshot.forEach(doc => {
          temp.push(doc.data())
        })

        setSteps(temp)
      })

    //must return to cleanup
    return unsub
  }, [])

  return steps
}

export const useIntentList = () => {
  const [intentList, setIntentList] = useState([])

  useEffect(() => {
    const unsub = fire
      .firestore()
      .collection('Intent')
      .where('showinoptions', '==', true)
      .onSnapshot(snapshot => {
        let temp = []

        snapshot.forEach(doc => {
          //only call the same function once
          const { label, name: value } = doc.data()

          temp.push(
            {
              label,
              value,
              trigger: 'otherdetail'
            }
          )
        })

        shuffle(temp)

        temp.push(
          {
            label: '其他',
            value: '其他',
            trigger: 'other'
          }
        )
        //temp.slice(0, 5)
        setIntentList(temp)
      })

    //must return to cleanup
    return unsub
  }, [])

  return intentList
}
