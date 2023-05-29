import React, { useEffect, useState, useContext } from 'react'
import styles from './FriendsRequestsPage.module.scss';

import { Context } from '../../';

import TitleText from "../../components/TitleText/TitleText.jsx"
import FriendRequesCard from "../../components/AdminCard/FriendRequesCard.jsx"


const FriendsRequestsPage = () => {
    const {store} = useContext(Context);

    const [rerender, setRerender] = useState(0);
    const rerend = () => {setRerender(rerender+1)}
    const [usersDataList, setUsersDataList] = useState([]);
    
    useEffect(() => {
        store.getInvitesList().then((res) => {
            setUsersDataList(res);
        });
    }, [rerender]);

    return(
        <div className={styles.contentContaineer + " " + styles.admin}>
            <div style={{marginTop: 30 + "px"}}>
                <TitleText>Заявки в друзья</TitleText>
            </div>
            <div className={styles.admin__cards}>
                {usersDataList.map((data, index) => 
                    <FriendRequesCard  key={index} data={data} rerender={rerend}/>
                )}
                {usersDataList.length === 0 ? <p className={styles.pinfo}>Список заявок пуст</p> : ""}
            </div>
            
        </div>
    );
}

export default FriendsRequestsPage;