import React, { useState, useContext } from "react";
import styles from './RegistrationPage.module.scss';

import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import ButtonA from "../../components/ButtonA/ButtonA.jsx"
import InputA from "../../components/InputA/InputA.jsx"
import TitleText from "../../components/TitleText/TitleText.jsx"
import { Context } from "../..";

const RegistrationPage = () => {
    const navigate = useNavigate();
    const {store} = useContext(Context);

    const [errLg, setErrLg] = useState(false);
    const [errPswrd, setErrPswrd] = useState(false);

    const [formData, setFormData] = useState({
        login: '',
        password: '',
        repeatPassword: '',
    });

    const onChangeForm = (e) => {setFormData({...formData, [e.target.name]: e.target.value}); setErrPswrd(false); setErrLg(false);}
    const onSubmitForm = (e) => {
        e.preventDefault();
        if (!(formData.login === '' || formData.password === '' || formData.repeatPassword === '')) {
            if (formData.password === formData.repeatPassword) {
                store.registration(formData.login, formData.password).then((res) => {
                    if (typeof res === 'undefined')
                        navigate('/');
                    else {
                        setErrLg(true);
                        e.target.reset();
                        setFormData({
                            login: '',
                            password: '',
                            repeatPassword: '',
                        })
                    }
                });
            }
            else {
                setErrPswrd(true);
            }
        }
        
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
                    <p>{ errLg ? 'Логин уже занят' : ''}</p>
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
                    <p>{ errPswrd ? 'Пароли не совпадают' : '' }</p>
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