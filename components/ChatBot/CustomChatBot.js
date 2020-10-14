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
            <div>
              <img width='45' height='45' src={chatBotHeaderTitle.logo} />
              {chatBotHeaderTitle.name}
            </div>
          </Fragment>}
          {...chatBotConfig}
          steps={steps}
        />
      </ThemeProvider>
    </Fragment>
  )
}
