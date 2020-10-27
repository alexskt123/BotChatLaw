//import from react
import { Fragment, useState, useEffect, useContext } from 'react'
//import lib
import { ThemeProvider } from 'styled-components'
import ChatBot from '../../lib/react-simple-chatbot/react-simple-chatbot'
//import chatbot configuration
import { chatBotConfig, chatBotHeaderTitle, chatBotTheme } from '../../config/chatBot'
import { withTranslation } from 'next-i18next'
import { Store } from '../../lib/store'

//export default component
function CustomChatBot({ t, i18n }) {

  const store = useContext(Store)
  const [config, setConfig] = useState({})
  const { language } = i18n

  console.log({ store })

  const { state: { steps } } = store

  useEffect(() => {

    setConfig({
      placeholder: t('chatBotConfig.placeholder'),
      floatingIcon: t('floatingIcon'),
      title: t('chatBotConfig.title')
    })
  }, [language])

  const { title, ...rest } = config

  console.log({ steps })

  if (!steps) {
    return ''
  }

  return (
    <Fragment>
      <ThemeProvider theme={chatBotTheme}>
        <ChatBot
          headerTitle={<Fragment>
            <img {...chatBotHeaderTitle.logo} />
            <div style={{ ...chatBotHeaderTitle.divConfig }}>
              <span style={{ ...chatBotHeaderTitle.nameConfig }}>{title}</span>
            </div>
          </Fragment>}
          {...chatBotConfig}
          {...rest}
          steps={steps}
        />
      </ThemeProvider>
    </Fragment>
  )
}

export default withTranslation('chatBot')(CustomChatBot)
