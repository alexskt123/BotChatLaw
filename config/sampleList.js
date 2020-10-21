export const sampleListItems = [
  {    
    href: '/sample?template=EmploymentContract',
    value:'EmploymentContract'
  },
  {    
    href: '/sample?template=Will',
    value: 'Will'
  }  
]

export const customTemplate = {
  EmploymentContract: {
    defaultSample: {
      startSate: '3rd October 2020',
      eeName: 'Chan Tai Man',
      erName: 'God Bless Trump Company',
      jobTitle: 'Analyst',
      probation: '3 months',
      salary: 60000,
      annualLeave: 10,
      noticePeriod: '1 month'
    },
    steps: ['1', '2', '3', '4', '5', '6', '7', '8'],
    stepLabels: [
      {        
        name: 'startSate'
      },
      {        
        name: 'eeName'
      },
      {        
        name: 'erName'
      },
      {        
        name: 'jobTitle'
      },
      {        
        name: 'probation'
      },
      {        
        name: 'salary'
      },
      {        
        name: 'annualLeave'
      },
      {        
        name: 'noticePeriod'
      }
    ]
  },
  Will: {
    defaultSample: {
      testatorName: 'Chan Tai Man',
      testatorID: 'Y123456(7)',
      testatorAddr: 'Flat A, Floor 8, King Hill',
      residue: 'sons'
    },
    steps: ['1', '2', '3', '4'],
    stepLabels: [
      {        
        name: 'testatorName'
      },
      {        
        name: 'testatorID'
      },
      {        
        name: 'testatorAddr'
      },
      {        
        name: 'residue'
      }
    ]
  }
}