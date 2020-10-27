
const Settings = {
  HeaderName: '法律小幫手',
  Copyright: '© 2020 BotChatLaw Limited',
  FlatLogo: '/logoFlat.png',
  LogoImgSrc: '/logo.png'
}

export default Settings

export const NavItems = [
  {
    href: '/aboutus'
  },
  {
    href: '/samplelist'
  },
  {
    href: '/chart'
  },
  {
    href: '/faq'
  }
]

export const webConfig = {
  //update this or the value in firebase to force refresh
  webVersion: '0.0.12',
  languages: ['zh', 'en']
}

export const versionCheckingModalConfig = {
  title: 'Update Available!',
  text: 'Click "Update Now" to update.',
  icon: 'question',
  showDenyButton: true,
  confirmButtonText: 'Update Now',
  denyButtonText: 'Later',
  timer: 1000 * 5,
  timerProgressBar: true
}
