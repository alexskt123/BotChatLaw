
import styles from '../styles/Home.module.css'
import ChatBot from 'react-simple-chatbot';
import { Fragment, useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Others from '../components/Others';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'serif',
  headerBgColor: '#fffbc9',
  headerFontColor: '#8003fc',
  headerFontSize: '15px',
  botBubbleColor: '#fffbc9',
  botFontColor: '#000000',
  userBubbleColor: '#e2f5ce',
  userFontColor: '#4a4a4a',
};

export default function Home() {

  return (
    <Fragment>
      <Head>

        <title>Bot Chat Law</title>

      </Head>
      <div className={styles.container} >
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="法律小幫手"
            placeholder="請輸入 ..."
            botAvatar="botAvatar.png"
            userAvatar="userAvatar.png"
            steps={[
              {
                id: '1',
                message: '請問你叫咩名?',
                trigger: '2',
              },
              {
                id: '2',
                user: true,
                validator: (value) => {
                  if (value === null || value.trim() === '') {
                    return '請輸入名字';
                  }
                  return true;
                },
                trigger: '3',
              },
              {
                id: '3',
                message: '{previousValue}, 你好!',
                trigger: '4',
              },
              {
                id: '4',
                message: '你想知道咩法律意見?',
                trigger: '5',
              },
              {
                id: '5',
                options: [
                  { value: 1, label: '合約', trigger: '6' },
                  { value: 2, label: '疏忽', trigger: '4' },
                  { value: 3, label: '結束', trigger: '0' },
                  { value: 4, label: '其他', trigger: 'other' },
                ],
              },
              {
                id: '6',
                message: '你想知道甚麼?',
                trigger: '8',
              },
              {
                id: '7',
                message: '你想知道甚麼?',
                trigger: '0',
              },
              {
                id: '8',
                options: [
                  { value: 1, label: '構成合約的元素', trigger: '9' },
                  { value: 2, label: '有用的網頁', trigger: '11' },
                  { value: 3, label: '合約的類型', trigger: '4' },
                  { value: 4, label: '結束', trigger: '0' },
                ],
              },
              {
                id: '9',
                component: (
                  <Fragment>
                    <div style={{
                      backgroundColor: '#fffbc9',
                      width: '100%'
                    }}>
                      <h4>要構成一份有約束力的合約(CONTRACT),一般必須具備至少以下四個重要元素:</h4>
                      <li>要約 - 其中一方發出要約，即列出交易條件</li>
                      <li>接納/受約 - 要約為另一方接受</li>
                      <li>代價 - 每一方均要付出代價</li>
                      <li>受法律約束的意圖</li>
                    </div>
                  </Fragment>
                ),
                trigger: '4',
              },
              {
                id: '11',
                component: (
                  <Fragment>
                    <div style={{
                      backgroundColor: '#fffbc9',
                      color: 'blue',
                      width: '100%'
                    }}>
                      <h4>請點擊以下連結:</h4>
                      <li><a href="https://zh.wikipedia.org/wiki/%E5%A5%91%E7%BA%A6" target="_blank">維基百科</a></li>
                      <li><a href="https://www.clic.org.hk/tc/" target="_blank">社區法網</a></li>
                    </div>
                  </Fragment>
                ),
                trigger: '4',
              },
              {
                id: 'other',
                user: true,
                trigger: '13',
              },
              {
                id: '13',
                component: <Others />,
                trigger: '4',
              },
              {
                id: '0',
                message: '再見!',
                end: true
              }
            ]}
          />
        </ThemeProvider>
      </div>

    </Fragment>
  )
}
