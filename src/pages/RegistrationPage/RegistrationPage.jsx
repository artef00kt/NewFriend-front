import React, { useState } from "react";
import styles from './RegistrationPage.module.scss';

import { Link } from 'react-router-dom';

import ButtonA from "../../components/ButtonA/ButtonA.jsx"
import InputA from "../../components/InputA/InputA.jsx"
import TitleText from "../../components/TitleText/TitleText.jsx"

const RegistrationPage = () => {

    const [formData, setFormData] = useState({
        login: '',
        password: '',
    });

    const onChangeForm = (e) => {setFormData({...formData, [e.target.name]: e.target.value})}
    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log("это страница логина");
        console.log(formData);
    }

    return (
        <section className={styles.registrationContaineer + " " + styles.registrationPage}>
            <TitleText> Регистрация </TitleText>
            <form onSubmit={onSubmitForm} style={{display: "contents"}}>
                <div style={{marginTop: 40 + "px"}}>
                    <InputA 
                        customwidth={350}
                        onChange={onChangeForm}
                        name={"login"}
                        type={"text"}
                        placeholder={"Логин"}/>
                </div>
                <div className={styles.errorLoginText}>
                    <p>Логин уже занят</p>
                </div>

                <div style={{marginTop: 15 + "px"}}>
                    <InputA 
                        customwidth={350}
                        onChange={onChangeForm}
                        name={"password"}
                        type={"password"}
                        placeholder={"Пароль"}/>
                </div>

                <div style={{marginTop: 15 + "px"}}>
                    <InputA 
                        customwidth={350}
                        onChange={onChangeForm}
                        name={"repeatPassword"}
                        type={"password"}
                        placeholder={"Повторите пароль"}/>
                </div>
                <div className={styles.errorLoginText}>
                    <p>Пароли не совпадают</p>
                </div>
                <div style={{marginTop: 20 + "px"}}>
                    <ButtonA 
                        text={"Зарегистрироваться"} 
                        type={"submit"}/>
                </div>
            </form>
            <p className={styles.noAccountText}>Есть аккаунт? <Link to="/login">Войти</Link></p>
            
        </section>
    );
}

export default RegistrationPage;