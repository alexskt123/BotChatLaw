const defaultNameSpace = [
  'header',
  'chatBot',
  'contactUs',
  'messages',
  'settings'
]

export const nameSpaceConfig = {
  index: ['header'],
  aboutus: [...defaultNameSpace, 'aboutUs'],
  samplelist: [...defaultNameSpace, 'sampleList'],
  chart: [...defaultNameSpace, 'chart'],
  sample: [...defaultNameSpace]
}
