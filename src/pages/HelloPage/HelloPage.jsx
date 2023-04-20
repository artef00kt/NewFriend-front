import React from "react";
import styles from './HelloPage.module.scss';

import ButtonA from "../../components/ButtonA/ButtonA.jsx"

import { useNavigate } from "react-router-dom";

const HelloPage = () => {
    const navigate = useNavigate();

    const goRegistration = () => {navigate('/registration')}

    return(
        <section className={styles.contentContaineer + " " + styles.helloPageDelimiter}>
            <div className={styles.leftHello}>
                <div className={styles.leftHelloImage}/>

            </div>
            <div className={styles.rightHello}>
                <div className={styles.helloLogo}/>
                <p className={styles.helloText}>New Friend - это сервис для поиска новых знакомств. Тут можно добавить еще кучу крутого текста, какой-нибудь слоган и еще что-нибудь. Я просто не знаю, что сюда надо бы вписать. Но текст, наверное, будет круто смотреться. Надеюсь.</p>
                <ButtonA 
                    text={"Зарегистрироваться"} 
                    onClick={goRegistration}
                />
            </div>
            
        </section>
    )
}

export default HelloPage;