
import styles from '../styles/Home.module.css'
import ChatBot from 'react-simple-chatbot';
import {Fragment , useEffect} from 'react';
import Head from 'next/head';


export default function Home() {

  useEffect(() => {

  }, []);

  return (
    <Fragment>
      <Head>

        <title>Bot Chat Law</title>

      </Head>      
      <div className={styles.container} >
      <ChatBot
        headerTitle="Speech Synthesis"
        speechSynthesis={{ enable: true, lang: 'en' }}
        steps={[
          {
            id: '1',
            message: '請問你叫咩名?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: '{previousValue}, 你好!',
            trigger: '4',
          },
          {
            id: '4',
            options: [
              { value: 1, label: '結束', trigger: '5' },
              { value: 2, label: '問多次', trigger: '1' },
            ],
          },         
          {
            id: '5',
            message: '再見!',
            end: true
          }
        ]}
      />   
      </div>    
    
    </Fragment>
  )
}
