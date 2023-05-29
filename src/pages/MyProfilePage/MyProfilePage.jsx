import  React, { useState, useContext, useEffect } from 'react'
import styles from './MyProfilePage.module.scss';
import { useNavigate } from "react-router-dom";

import { Context } from '../../';

import TitleText from "../../components/TitleText/TitleText.jsx"
import ButtonA from "../../components/ButtonA/ButtonA.jsx"


const MyProfile = () => {
    const navigate = useNavigate();
    const {store} = useContext(Context);

    const [userData, setUserData] = useState({});

    const goEdit = () => { navigate('/editprofile') }
    
    useEffect(() => {
        store.getUserData().then((res) => {
            setUserData(res);
        })
    }, [])

    return(
        <div className={styles.contentContaineer + " " + styles.ffPage}>
            <div style={{marginTop: 30 + "px"}}>
                <TitleText> Ваш профиль</TitleText>
            </div>
            <div style={{marginTop: 50 + "px", marginBottom: 30 + "px"}}>
                <div className={styles.ffCardContaineer}>
                    <div className={styles.informContaineer}>
                        <div className={styles.photoPlugCont}>
                            <img className={styles.photoPlug} src={`data:image/png;base64,${userData.image}`} alt="avatar"/>
                        </div>
                        <div className={styles.infTextContaineer}>
                            <div className={styles.nameCity}>
                                <p className={styles.infName}>{userData.name}</p> 
                                <p className={styles.infCity}>{userData.city}</p>
                            </div>
                            <p>{userData.year} лет, {userData.sex === 'М' ? 'мужчина' : 'женщина'}</p>
                            <p>{userData.zodiacSign}</p>
                            <div className={styles.manyTextInfCont}> 
                                <p>{userData.description}</p>
                                
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div>
                <ButtonA text={"Редактировать профиль"} onClick={goEdit} />
            </div>
            
        </div>
    );
}

export default MyProfile;