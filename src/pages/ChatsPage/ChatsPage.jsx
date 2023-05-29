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
    const [newFriendList, setNewFriendList] = useState([]);

    const [rerender, setRerender] = useState(0);

    useEffect(() => {
        store.getUsers().then(response => {
            setFriendList(response);

            store.getUsersEmpty().then(res => {
                setNewFriendList(res);
            });
        });
    }, [rerender]);


    return(
        <div className={styles.contentContaineer + " " + styles.chatPage}>
            <div className={styles.chatUsersList}>
                {friendList.map((data, index) => 
                    <Link key={data.companion} to={`${data.companion}`} style={{ textDecoration: 'none' }}>
                        <ChatUserCard act={data.companion.toString() === id} name={data.companionName} text={data.me ? "Ты: "+data.text : data.text} image={data.image}/>
                    </Link>
                )}

                {newFriendList.map((data, index) => 
                    <Link key={data.companion} to={`${data.companion}`} style={{ textDecoration: 'none' }}>
                        <ChatUserCardEmpty act={data.companion.toString() === id} name={data.companionName} text={"Напишите первым!"} image={data.image}/>
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
            <div className={styles.chatUserCard__photoCont}>
                <img  className={styles.chatUserCard__photo} src={`data:image/png;base64,${props.image}`} alt="avatar" />
            </div>
            <div className={styles.chatUserCard__text}>
                <p className={styles.chatUserCard__text_name}>{props.name}</p>
                <p className={styles.chatUserCard__text_lastMessage}>{props.text}</p>
            </div>
        </div>
    );
}

const ChatUserCardEmpty = ({act=false, children, ...props}) => {
    const stl = act ? styles.chatUserCard_act : styles.chatUserCard_noAct;
    return (
        <div className={styles.chatUserCard + " " + stl}>
            <div className={styles.chatUserCard__photoCont}>
                <img  className={styles.chatUserCard__photo} src={`data:image/png;base64,${props.image}`} alt="avatar" />
            </div>
            <div className={styles.chatUserCard__text}>
                <p className={styles.chatUserCard__text_name}>{props.name}</p>
                <p className={styles.chatUserCard__text_newfriend}>{props.text}</p>
            </div>
        </div>
    );
}

export default observer(ChatsPage);