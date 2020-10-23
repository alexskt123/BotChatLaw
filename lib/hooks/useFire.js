//import from react
import { useEffect, useState } from 'react'
//import lib
import fire from '../../config/fire-config'

import shuffle from 'shuffle-array'

import { others } from '../../config/stepOptions'
import { useTranslation } from '../../config/i18n'
import { getContent } from '../../lib/dataProcess'

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

  const { i18n } = useTranslation()
  const { language } = i18n

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
              label: getContent(label, language),
              value,
              trigger: 'otherdetail'
            }
          )
        })

        shuffle(temp)

        // other options
        temp.push(others[language])

        setIntentList(temp)
      })

    //must return to cleanup
    return unsub
  }, [])

  return intentList
}

export const useSummary = () => {
  const [summary, setSummary] = useState(null)

  useEffect(() => {
    const unsub = fire
      .firestore()
      .collection('Request')
      .doc('summary')
      .onSnapshot(doc => {
        let temp = {}

        if (doc.exists) {
          temp = doc.data()
        }

        setSummary(temp)
      })

    //must return to cleanup
    return unsub
  }, [])

  return summary
}

export const useServerConfig = () => {
  const [config, setConfig] = useState({ webVersion: '0.0.0' })

  useEffect(() => {
    const unsub = fire
      .database()
      .ref('serverConfig')
      .on('value', snapshot => {
        if (snapshot) {
          let temp = snapshot.val()

          setConfig(temp)
        }
      })

    return unsub
  }, [])

  return config
}
