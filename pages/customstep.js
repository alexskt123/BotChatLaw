
import { useState, useEffect } from 'react';

import { getSteps } from '../lib/firebaseResult';
import React, { Component } from 'react';
import Others from '../components/Others'
import CustomChatBot from '../components/CustomChatBot'
 
export default function CustomStep() {

  const [datas, setData] = useState([])

  const steps = () => {

    if (datas.length <= 0) {
      return null
    }
    datas.find(data => data['component'] !== undefined).component = <Others />

    return CustomChatBot(datas)
  }

  useEffect(() => {
    (async () => {
      let fireStep = await getSteps()
      setData(fireStep)
    })()
  }, [])


  return (
    steps()
  )
}
