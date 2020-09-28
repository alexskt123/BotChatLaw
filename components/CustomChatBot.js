
import ChatBot from 'react-simple-chatbot';
import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Div100vh from 'react-div-100vh';

import React from 'react';

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

export default function CustomChatBot(inputSteps) {

    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <Div100vh>
                    <ChatBot
                        headerTitle="法律小幫手"
                        placeholder="請輸入。。。"
                        botAvatar="botAvatar.png"
                        userAvatar="userAvatar.png"
                        bubbleStyle={{ fontSize: '15px' }, { boxShadow: "1px 2px 5px #9E9E9E" }}
                        bubbleOptionStyle={{ fontSize: '15px' }, { boxShadow: "1px 2px 5px #9E9E9E" }}
                        width="100%"
                        steps={
                            inputSteps
                        }
                    />
                </Div100vh>
            </ThemeProvider>


        </Fragment>
    )

}