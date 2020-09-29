//import from react
import { useEffect, useState } from "react";
//import lib
import fire from '../../config/fire-config';
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
      .orderBy('name')
      .onSnapshot(snapshot => {
        const temp = []

        snapshot.forEach(doc => {
          //only call the same function once
          const { label, name: value } = doc.data()

          temp.push(
            {
              label,
              value,
              waitAction: true
            }
          )
        })

        setIntentList(temp)
      })

    //must return to cleanup
    return unsub
  }, [])

  return intentList
}
