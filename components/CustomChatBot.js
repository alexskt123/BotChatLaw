//import from react
import { Fragment } from 'react'
import Badge from 'react-bootstrap/Badge'
//import lib
import { ThemeProvider } from 'styled-components'
import ChatBot from 'react-simple-chatbot'
//import chatbot configuration
import { chatBotConfig, chatBotHeaderTitle, chatBotTheme } from '../config/chatBot'

//export default component
export default function CustomChatBot({ height, steps }) {
  return (
    <Fragment>
      <ThemeProvider theme={chatBotTheme}>
        <ChatBot
          headerTitle={<Fragment>
            <div>
              <h4>
                <img width='40' height='40' className="mr-3" src={chatBotHeaderTitle.logo}>
                </img><Badge className="p-0" variant="dark">{chatBotHeaderTitle.name}</Badge>
              </h4>
            </div>
          </Fragment>}
          {...chatBotConfig}       
          height={height}
          steps={steps}          
        />
      </ThemeProvider>
    </Fragment>
  )
}
