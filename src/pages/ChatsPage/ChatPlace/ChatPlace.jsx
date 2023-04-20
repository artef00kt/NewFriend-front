import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './ChatPlace.module.scss';

const ChatPlace = () => {
    const {id} = useParams();
    const sre = "капец ка кмнеоо ваы ваывоваолдпдываоплывапод опыавлд одваы пролдва ырплова рплоы враплдырвапл враолывапроыолдв ролдд ролывапролдывар лоыварпдло дылвоарп ыдвлоапр ывдаолрп ыдлваопр"
    const messageDate = [
        {   my: true,
            messageDate: "10.11.2002 12:22",
            messageText: "какой-то текст 1", },

        {    my: false,
            messageDate: "10.11.2002 12:22",
            messageText: "какой-то текст 2", },

        {   my: false,
            messageDate: "10.11.2002 12:22",
            messageText: "какой-то текст 3", },

        {   my: false,
            messageDate: "10.11.2002 12:22",
            messageText: sre, },

        {   my: true,
            messageDate: "10.11.2002 12:22",
            messageText: "какой-то текст 5", },

        {   my: true,
            messageDate: "10.11.2002 12:22",
            messageText: sre, },
    ];



    const [sendMessage, setSendMessage] = useState('');

    const onChangeForm = (e) => {setSendMessage(e.target.value)};
    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log("message: ", sendMessage);
        e.target.reset();
    }

    
    return (
        <div className={styles.chatPlace}>
            <div className={styles.chatPlace__messages}>
                {messageDate.reverse().map((data, index) => 
                    <Message key={index} my={data.my} date={data.messageDate}>{data.messageText}</Message>
                )}
            </div>
            <form onSubmit={onSubmitForm} id={"sendMessageForm"} className={styles.chatPlace__sendMessage}>
                <input onChange={onChangeForm} placeholder={"Введите сообщение..." + id.toString()} />
                <button type={"submit"}>Отправить</button>
            </form>
        </div>
    );
}

const Message = ({my, date, children, ...props}) => {
    const stl1 = my ? styles.messageContaineerMy : styles.messageContaineerTheir;
    const stl2 = my ? styles.messageBox_my : styles.messageBox_their;
    return(
        <div className={styles.messageContaineer + " " + stl1}>
            <div className={styles.messageBox + " " + stl2} {...props}>
                <p className={styles.messageBox__text}>{children}</p>
                <p className={styles.messageBox__date}>{date}</p>
            </div>
        </div>
    );
}


export default ChatPlace;