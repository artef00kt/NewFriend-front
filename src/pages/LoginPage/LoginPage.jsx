import React, { useState, useContext } from "react";
import styles from './LoginPage.module.scss';

import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import ButtonA from "../../components/ButtonA/ButtonA.jsx"
import InputA from "../../components/InputA/InputA.jsx"
import TitleText from "../../components/TitleText/TitleText.jsx"
import { Context } from "../..";

const LoginPage = () => {
    const navigate = useNavigate();
    const {store} = useContext(Context);

    const [errLg, setErrLg] = useState(false);
    const [formData, setFormData] = useState({
        login: '',
        password: '',
    });

    const onChangeForm = (e) => {setFormData({...formData, [e.target.name]: e.target.value}); setErrLg(false);}
    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(formData);
        if (!(formData.login === '' || formData.password === '')) {
            store.login(formData.login, formData.password).then((res) => {
                if (typeof res === 'undefined')
                    navigate('/');
                else {
                    setErrLg(true);
                    e.target.reset();
                    setFormData({
                        login: '',
                        password: '',
                    })
                }
            });
        }
    }

    return (
        <section className={styles.loginContaineer + " " + styles.loginPage}>
            <TitleText> Вход </TitleText>
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
                        type={"password"}
                        placeholder={"Пароль"}/>
                </div>
                <div className={styles.errorLoginText}>
                    <p>{errLg ? 'Неверный логин или пароль' : ''}</p>
                </div>
                <div style={{marginTop: 15 + "px"}}>
                    <ButtonA 
                        text={"Войти"} 
                        type={"submit"}/>
                </div>
            </form>
            <p className={styles.noAccountText}>Нет аккаунта? <Link to="/registration">Регистрация</Link></p> 
        </section>
    );
}

export default LoginPage;