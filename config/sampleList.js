export const sampleListItems = [
  {
    label: '僱員合約範例',
    href: '/sample?template=EmploymentContract',
    value:'EmploymentContract'
  },
  {
    label: '遺囑範例',
    href: '/sample?template=Will',
    value: 'Will'
  }  
]

export const employmentContractDefaultSample = {
  startSate: '3rd October 2020',
  eeName: 'Chan Tai Man',
  erName: 'God Bless Trump Company',
  jobTitle: 'Analyst',
  probation: '3 months',
  salary: 60000,
  annualLeave: 10,
  noticePeriod: '1 month'
}

export const willDefaultSample = {
  testatorName: 'Chan Tai Man',
  testatorID: 'Y123456(7)',
  testatorAddr: 'Flat A, Floor 8, King Hill',
  residue: 'sons'
}

export const customTemplate = {
  EmploymentContract: {
    steps: ['1', '2', '3', '4', '5', '6', '7', '8'],
    stepLabels: [
      {
        title: '開始日期',
        text: '',
        name: 'startSate'
      },
      {
        title: '僱員名稱',
        text: '如：Chan Tai Man',
        name: 'eeName'
      },
      {
        title: '僱主名稱',
        text: '如：God Bless Trump Company',
        name: 'erName'
      },
      {
        title: '職位',
        text: '如：Analyst',
        name: 'jobTitle'
      },
      {
        title: '試用期',
        text: '如：3個月',
        name: 'probation'
      },
      {
        title: '薪金',
        text: '如：50000',
        name: 'salary'
      },
      {
        title: '年假',
        text: '如：10日',
        name: 'annualLeave'
      },
      {
        title: '通知期',
        text: '如：3個月',
        name: 'noticePeriod'
      }
    ]
  },
  Will: {
    steps: ['1', '2', '3', '4'],
    stepLabels: [
      {
        title: '遺囑人姓名',
        text: '如：Chan Tai Man',
        name: 'testatorName'
      },
      {
        title: '遺囑人身份證號碼',
        text: '如：A123456(7)',
        name: 'testatorID'
      },
      {
        title: '遺囑人地址',
        text: '如：GRAND MILLENNIUM PLAZA, COSCO TOWER',
        name: 'testatorAddr'
      },
      {
        title: '剩餘遺產受益人',
        text: 'Chan Siu Man',
        name: 'residue'
      }
    ]
  }
}