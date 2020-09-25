
import styles from '../styles/Home.module.css'
import ChatBot from 'react-simple-chatbot';
import { Fragment, useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Others from '../components/Others';

import Steps from '../components/Steps';

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
};

export default function Home() {

  return (
    <Fragment>
      <Head>

        <title>Bot Chat Law</title>

      </Head>

        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="法律小幫手"
            placeholder="請輸入 ..."
            botAvatar="botAvatar.png"
            userAvatar="userAvatar.png"
            bubbleStyle={{ fontSize: '15px' },{boxShadow: "1px 2px 5px #9E9E9E"}}
            bubbleOptionStyle={{ fontSize: '15px' },{boxShadow: "1px 2px 5px #9E9E9E"}}
            width="100%"
            height="100vh"
            steps= {<Steps/>}
          />
        </ThemeProvider>


    </Fragment>
  )
}
