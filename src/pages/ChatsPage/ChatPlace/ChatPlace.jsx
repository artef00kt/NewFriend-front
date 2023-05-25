import React, { useEffect, useContext } from 'react';
import { useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';

import { observer } from 'mobx-react-lite';

import { Context } from '../../../';

import styles from './ChatPlace.module.scss';

const ChatPlace = () => {
    const {store} = useContext(Context);
    const {id} = useParams();

    const [messagesList, setMessagesList] = useState([]);

    const [rerender, setRerender] = useOutletContext();

    useEffect(() => {
        store.getMessages(id.toString()).then(response => {
            setMessagesList(redataList(response, store.user.login));
        });
    }, [id, rerender])
    
    const [sendMessage, setSendMessage] = useState('');

    const onChangeForm = (e) => {setSendMessage(e.target.value)};
    const onSubmitForm = (e) => {
        e.preventDefault();
        if (sendMessage != '')
        {
            store.sendMessage(id.toString(), sendMessage).then(() => {setRerender(rerender+1)});
            console.log("message: ", sendMessage);
            
            setSendMessage('');
            e.target.reset();
        }
        
    }

    return (
        <div className={styles.chatPlace}>
            <div className={styles.chatPlace__messages}>
                {messagesList.reverse().map((data, index) => 
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

const redataList = (old_list, myLogin) => {
    const new_list = [];
    for (let i = 0; i < old_list.length; ++i) {
        let obj = {}
        obj.my = old_list[i].sender === myLogin;
        obj.messageText = old_list[i].text;
        obj.messageDate = old_list[i].date + " " + old_list[i].time;
        new_list.push(obj);
    }
    return new_list;
};

export default observer(ChatPlace);