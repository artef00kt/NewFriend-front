import React, { useContext, useState, useEffect } from 'react'
import styles from './FindFriendPage.module.scss';

import { Context } from '../../';

import { useNavigate } from "react-router-dom";

import TitleText from "../../components/TitleText/TitleText.jsx"

const FindFriendPage = () => {
    const navigate = useNavigate();
    const {store} = useContext(Context);

    const [rerender, setRerender] = useState(0);
    const [newFriendData, setNewFriendData] = useState({});
    
    useEffect(() => {
        store.getFindFriend().then((res) => {
            setNewFriendData(res);
        });
    }, [rerender])

    const beFr = () => {
        store.patchInviteToFriend(newFriendData.login).then(() => setRerender(rerender+1));
    }
    
    const notBeFr = () => {
        setRerender(rerender+1);
    }

    const toComplain = () => navigate(`/sendcomplain/${newFriendData.login}`);

    return(
        <div className={styles.contentContaineer + " " + styles.ffPage}>
            <div style={{marginTop: 30 + "px"}}>
                <TitleText> Поиск друзей</TitleText>
            </div>
            {typeof newFriendData === 'undefined' ? <p className={styles.pinfo}>Люди закончились, попробуйте позднее</p> : 
            <div style={{marginTop: 50 + "px", marginBottom: 30 + "px"}}>
                <div className={styles.ffCardContaineer}>
                    <div className={styles.informContaineer}>
                        <div className={styles.photoPlugCont}>
                            <img className={styles.photoPlug} src={`data:image/png;base64,${newFriendData.image}`} alt="avatar"/>
                        </div>
                        <div className={styles.infTextContaineer}>
                            <div className={styles.nameCity}>
                                <p className={styles.infName}>{newFriendData.name}</p> 
                                <p className={styles.infCity}>{newFriendData.city}</p>
                            </div>
                            <p>{newFriendData.year} лет, {newFriendData.sex === 'М' ? 'мужчина' : 'женщина'}</p>
                            <p>{newFriendData.zodiacSign}</p>
                            <div className={styles.manyTextInfCont}> 
                                <p>{newFriendData.description}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.btnsContaineer}>
                        <BtnsB onClick={notBeFr} stl={false}>Не дружить</BtnsB>
                        <BtnsB onClick={beFr} stl={true}>Дружить</BtnsB>
                    </div>
                    <BtnsC onClick={toComplain}>Пожаловаться</BtnsC>

                </div>
            </div>
            }
            
        </div>
    );
}

const BtnsB = ({stl=true, children, ...props}) => {
    const additStyle = stl ? styles.btnsB_acpt : styles.btnsB_deny;
    return (
        <button className={styles.btnsB + " " + additStyle} {...props}>
            {children}
        </button>
    );
}

const BtnsC = ({children, ...props}) => {
    return (
        <button className={styles.btnsC} {...props}>
            {children}
        </button>
    );
}

export default FindFriendPage;