

export default (stepID) => {

  if (stepID === 'stageask') {
    return [
      {
        label: "結束",
        value: 1,
        trigger: "tail"
      },
      {
        label: "發問",
        value: 2,
        trigger: "other"
      }
    ]
  }

  return []

} 

