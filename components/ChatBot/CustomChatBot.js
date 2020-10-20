//import from react
import { Fragment } from 'react'
//import lib
import { ThemeProvider } from 'styled-components'
import ChatBot from '../../lib/react-simple-chatbot/react-simple-chatbot'
//import chatbot configuration
import { chatBotConfig, chatBotHeaderTitle, chatBotTheme } from '../../config/chatBot'

//export default component
export default function CustomChatBot({ steps }) {
  return (
    <Fragment>
      <ThemeProvider theme={chatBotTheme}>
        <ChatBot
          headerTitle={<Fragment>
            <img {...chatBotHeaderTitle.logo} />
            <div style={{...chatBotHeaderTitle.divConfig}}>              
              <span style={{...chatBotHeaderTitle.nameConfig}}>{chatBotHeaderTitle.name}</span>
            </div>
          </Fragment>}
          {...chatBotConfig}
          steps={steps}
        />
      </ThemeProvider>
    </Fragment>
  )
}
