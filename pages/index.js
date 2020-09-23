
import styles from '../styles/Home.module.css'
import ChatBot from 'react-simple-chatbot';
import {Fragment} from 'react';
import Head from 'next/head';


export default function Home() {
  return (
    <Fragment>
      <Head>

        <title>Bot Chat Law</title>

      </Head>      
      <div className={styles.container} >
        <ChatBot
              steps={[
                {
                  id: 'hello-world',
                  message: 'Hello World!',
                  end: true,
                },
              ]}
            />         
      </div>    
    
    </Fragment>
  )
}
