import React, { useContext, useEffect, useState } from 'react'
import styles from './ChatsPage.module.scss';

import { observer } from 'mobx-react-lite';

import { Link, useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { Context } from '../../';

const ChatsPage = () => {
    const {store} = useContext(Context);
    const {id} = useParams();

    const [friendList, setFriendList] = useState([]);

    const [rerender, setRerender] = useState(0);

    useEffect(() => {
        store.getUsers().then(response => {
            //setFriendList(redataList(response, store.user.login));
            setFriendList(response);
        });
    }, [rerender]);


    return(
        <div className={styles.contentContaineer + " " + styles.chatPage}>
            <div className={styles.chatUsersList}>
                {friendList.map((data, index) => 
                    <Link key={data.companion} to={`${data.companion}`} style={{ textDecoration: 'none' }}>
                        <ChatUserCard act={data.companion.toString() === id} name={data.companionName} text={data.me ? "Ты: "+data.text : data.text} />
                    </Link>
                )}
            </div>
            
            <Outlet context={[rerender, setRerender]}/>
            
        </div>
    );
}

const ChatUserCard = ({act=false, children, ...props}) => {
    const stl = act ? styles.chatUserCard_act : styles.chatUserCard_noAct;
    return (
        <div className={styles.chatUserCard + " " + stl}>
            <div className={styles.chatUserCard__photo} />
            <div className={styles.chatUserCard__text}>
                <p className={styles.chatUserCard__text_name}>{props.name}</p>
                <p className={styles.chatUserCard__text_lastMessage}>{props.text}</p>
            </div>
        </div>
    );
}

const redataList = (old_list, myLogin) => {
    const new_list = [];
    for (let i = 0; i < old_list.length; ++i) {
        let obj = {}
        if (old_list[i].sender === myLogin) {
            obj.me = true;
            obj.companion = old_list[i].recipient;
        }
        else {
            obj.me = false;
            obj.companion = old_list[i].sender;
        }
        obj.text = old_list[i].text;
        new_list.push(obj);
    }
    return new_list;
};

export default observer(ChatsPage);