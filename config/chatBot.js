const sameStyle = { fontSize: '15px', boxShadow: '1px 2px 5px #9E9E9E', border: '1px solid' }

export const chatBotConfig = {
  placeholder: '請輸入。。。',
  botAvatar: 'botAvatar.png',
  userAvatar: 'userAvatar.png',
  // width: '100%',
  bubbleStyle: sameStyle,
  bubbleOptionStyle: sameStyle,
  enableMobileAutoFocus: true,
  hideUserAvatar: true,
  floating: true,
  floatingIcon: 'floatingButton.png'
}

export const chatBotHeaderTitle = {
  logo: {
    src: 'logo.png',
    width: '45',
    height: '45'
  },
  name: '法律小幫手',
  divConfig: {
    left: '25%',
    width: '50%',
    textAlign: 'center',
    alignSelf: 'center',
    position: 'absolute'},
  spanConfig: {
    verticalAlign: 'middle'
  }
}

export const chatBotTheme = {
  background: '#f5f8fb',
  fontFamily: 'monospace',
  headerBgColor: '#0f1369',
  headerFontColor: '#ffffff',
  headerFontSize: '16px',
  botBubbleColor: '#ffffff',
  botFontColor: '#000000',
  userBubbleColor: '#4262d6',
  userFontColor: '#f5f7ff',
}