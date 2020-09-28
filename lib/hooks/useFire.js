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
