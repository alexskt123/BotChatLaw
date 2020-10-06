//import from react
import { Fragment } from 'react'
import Badge from 'react-bootstrap/Badge'
//import lib
import { ThemeProvider } from 'styled-components'
import ChatBot from 'react-simple-chatbot'
//TODO: move to theme config
const theme = {
  background: '#f5f8fb',
  fontFamily: 'monospace',
  headerBgColor: '#0f1369',
  headerFontColor: '#ffffff',
  headerFontSize: '16px',
  botBubbleColor: '#ffffff',
  botFontColor: '#000000',
  userBubbleColor: '#fffbc9',
  userFontColor: '#4a4a4a',
}
//export default component
export default function CustomChatBot({ height, steps }) {
  //varibles for component
  const sameStyle = { fontSize: '15px', boxShadow: '1px 2px 5px #9E9E9E' }
  //template
  //TODO: move to config
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle={<Fragment>
            <div>
              <h4>
                <img width='40' height='40' className="mr-3" src="logo.png">
                </img><Badge className="p-0" variant="dark">法律小幫手</Badge>
              </h4>
            </div>
          </Fragment>}
          placeholder="請輸入。。。"
          botAvatar="botAvatar.png"
          userAvatar="userAvatar.png"
          bubbleStyle={sameStyle}
          bubbleOptionStyle={sameStyle}
          width="100%"
          height={height}
          steps={steps}
          enableMobileAutoFocus={true}
        />
      </ThemeProvider>
    </Fragment>
  )
}
