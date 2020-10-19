
const Settings = {
  HeaderName: '法律小幫手',
  Copyright: '© 2020 BotChatLaw Limited',
  FlatLogo: 'logoFlat.png',
  LogoImgSrc: 'logo.png'
}

export default Settings

export const NavItems = [
  {
    href: '/',
    label: '關於我哋'
  },
  {
    href: '/samplelist',
    label: '法律文件範例'
  },
  {
    href: '/chart',
    label: '搵過嘅嘢'
  }
]

export const webConfig = {
  //update this or the value in firebase to force refresh
  webVersion: '0.0.12'
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
