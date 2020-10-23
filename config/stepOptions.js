export const others = {
  label: '其他',
  value: '其他',
  trigger: 'other'
}

export const back = {
  label: '返回',
  value: 'head',
  trigger: 'head'
}

export const continueOptions = [
  {
    value: 'yes',
    label: '是'
  },
  {
    value: 'no',
    label: '否'
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
      trigger: 'stageintent'
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
      trigger: 'stageintent'
    }
    ,
    {
      label: 'Contact Us',
      value: '聯絡我們',
      trigger: 'stagecontact'
    }
  ]
}