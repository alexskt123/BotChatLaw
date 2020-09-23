
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
        steps={[
          {
            id: '1',
            message: 'What number I am thinking?',
            trigger: '2',
          },
          {
            id: '2',
            options: [
              { value: 1, label: 'Number 1', trigger: '4' },
              { value: 2, label: 'Number 2', trigger: '3' },
              { value: 3, label: 'Number 3', trigger: '3' },
            ],
          },
          {
            id: '3',
            message: 'Wrong answer, try again.',
            trigger: '2',
          },
          {
            id: '4',
            message: 'Awesome! You are a telepath!',
            end: true,
          },
        ]}
      />   
      </div>    
    
    </Fragment>
  )
}
