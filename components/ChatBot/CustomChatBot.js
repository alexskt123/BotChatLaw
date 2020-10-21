//import from react
import { Fragment } from 'react'
//import lib
import { ThemeProvider } from 'styled-components'
import ChatBot from '../../lib/react-simple-chatbot/react-simple-chatbot'
//import chatbot configuration
import { chatBotConfig, chatBotHeaderTitle, chatBotTheme } from '../../config/chatBot'
import { withTranslation } from 'next-i18next'

//export default component
function CustomChatBot({ steps, t }) {
  return (
    <Fragment>
      <ThemeProvider theme={chatBotTheme}>
        <ChatBot
          headerTitle={<Fragment>
            <img {...chatBotHeaderTitle.logo} />
            <div style={{...chatBotHeaderTitle.divConfig}}>              
              <span style={{...chatBotHeaderTitle.nameConfig}}>{t('chatBotConfig.title')}</span>
            </div>
          </Fragment>}
          {...chatBotConfig}
          placeholder={t('chatBotConfig.placeholder')}
          steps={steps}
        />
      </ThemeProvider>
    </Fragment>
  )
}

export default withTranslation('chatBot')(CustomChatBot)
