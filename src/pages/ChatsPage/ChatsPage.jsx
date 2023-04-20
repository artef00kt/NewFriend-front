import { React } from 'react'
import styles from './ChatsPage.module.scss';

import { Link, useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const ChatsPage = () => {
    const {id} = useParams();

    const friendsData = [false, true, false, false, false, false];

    return(
        <div className={styles.contentContaineer + " " + styles.chatPage}>
            <div className={styles.chatUsersList}>
                {friendsData.map((data, index) => 
                    <Link key={index} to={`${index}`} style={{ textDecoration: 'none' }}>
                        <ChatUserCard act={index.toString() === id} />
                    </Link>
                )}
            </div>
            
            <Outlet />
            
        </div>
    );
}

const ChatUserCard = ({act=false, children, ...props}) => {
    const stl = act ? styles.chatUserCard_act : styles.chatUserCard_noAct;
    return (
        <div className={styles.chatUserCard + " " + stl}>
            <div className={styles.chatUserCard__photo} />
            <div className={styles.chatUserCard__text}>
                <p className={styles.chatUserCard__text_name}>Артем</p>
                <p className={styles.chatUserCard__text_lastMessage}> очень очень длинное последнее сообщение</p>
            </div>

        </div>
    );
}

export default ChatsPage;