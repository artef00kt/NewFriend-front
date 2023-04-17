import React, { useState } from "react";
import styles from './LoginPage.module.scss';

import { Link, useLocation } from 'react-router-dom';

import ButtonA from "../../components/ButtonA/ButtonA.jsx"
import InputA from "../../components/InputA/InputA.jsx"
import TitleText from "../../components/TitleText/TitleText.jsx"

const LoginPage = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login' ? true : false ;

    const [formData, setFormData] = useState({
        login: '',
        password: '',
    });

    const onChangeForm = (e) => {setFormData({...formData, [e.target.name]: e.target.value})}
    const onSubmitForm = (e) => {
        e.preventDefault();
        //ну тут код какой-нибудь, проверочка там, все дела
        if (isLoginPage) {
            console.log("это страница логина");
            console.log(formData);
        }
        else {
            console.log("это страница регистрации");
            console.log(formData);
        }
        
    }

    return (
        <section className={styles.contentContaineer + " " + styles.loginPage}>
            <div style={{marginTop: 30 + "px"}}>
                <TitleText> {isLoginPage ? 'Вход' : 'Регистрация' } </TitleText>
            </div>
            <form onSubmit={onSubmitForm} style={{display: "contents"}}>
                <div style={{marginTop: 40 + "px"}}>
                    <InputA 
                        customwidth={350}
                        onChange={onChangeForm}
                        name={"login"}
                        type={"text"}
                        placeholder={"Логин"}/>
                </div>

                <div style={{marginTop: 15 + "px"}}>
                    <InputA 
                        customwidth={350}
                        onChange={onChangeForm}
                        name={"password"}
                        type={"text"}
                        placeholder={"Пароль"}/>
                </div>

                <div style={{marginTop: 40 + "px"}}>
                    <ButtonA 
                        text={isLoginPage ? 'Войти' : 'Зарегистрироваться' } 
                        type={"submit"}/>
                </div>
            </form>
            {isLoginPage ? 
                <p className={styles.noAccountText}>Нет аккаунта? <Link to="/registration">Регистрация</Link></p> 
                :
                <p className={styles.noAccountText}>Есть аккаунт? <Link to="/login">Войти</Link></p> }
            
        </section>
    );
}

export default LoginPage;