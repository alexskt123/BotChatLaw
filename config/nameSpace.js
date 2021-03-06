const defaultNameSpace = [
  'header',
  'chatBot',
  'contactUs',
  'messages',
  'settings'
]

export const nameSpaceConfig = {
  index: ['header', 'chatBot', 'settings'],
  aboutus: [...defaultNameSpace, 'aboutUs'],
  samplelist: [...defaultNameSpace, 'sampleList'],
  chart: [...defaultNameSpace, 'chart'],
  sample: [...defaultNameSpace],
  faq: [...defaultNameSpace, 'faq'],
  feedback: [...defaultNameSpace, 'feedback'],
  disclaimer: [...defaultNameSpace, 'disclaimer']
}
