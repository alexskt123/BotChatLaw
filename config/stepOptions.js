export const others = {
  en: {
    label: 'Others',
    value: 'other',
    trigger: 'other'
  },
  zh: {
    label: '其他',
    value: '其他',
    trigger: 'other'
  }
}

export const continueOptions = [
  {
    value: 'yes'
  },
  {
    value: 'no'
  }
]

export const defaultOptions = {
  zh: [
    {
      label: '結束',
      value: '結束',
      trigger: 'tail'
    },
    {
      label: '發問',
      value: '發問',
      trigger: 'other'
    }
    ,
    {
      label: '有咩可以問',
      value: '有咩可以問',
      trigger: 'stageintentzh'
    }
    ,
    {
      label: '聯絡我們',
      value: '聯絡我們',
      trigger: 'stagecontact'
    }
  ],
  en: [
    {
      label: 'End',
      value: '結束',
      trigger: 'tail'
    },
    {
      label: 'Ask',
      value: '發問',
      trigger: 'other'
    }
    ,
    {
      label: 'What can be asked?',
      value: '有咩可以問',
      trigger: 'stageintenten'
    }
    ,
    {
      label: 'Contact Us',
      value: '聯絡我們',
      trigger: 'stagecontact'
    }
  ]
}