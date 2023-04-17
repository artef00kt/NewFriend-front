import React from "react";
import styles from './Header.module.scss';

import { Outlet } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const goMyProfile = () => {navigate('/myprofile')}
    const goChats = () => {navigate('/chats')}
    const goFindFriend = () => {navigate('/findfriend')}
    const goLogin = () => {navigate('/login')}

    const goHome = () => {navigate('/')}

    return (
        <>
            <header className={styles.header}>
                <div className={styles.containeer}>
                    <div className={styles.leftHeader}>
                        <div className={styles.logo + " " + styles.headerLogo} onClick={goHome} />
                        <NavButton onClick={goMyProfile} text="Мой профиль"/>
                        <NavButton onClick={goChats} text="Чаты"/>
                        <NavButton onClick={goFindFriend} text="Поиск друзей"/>
                    </div>
                    <LoginButton onClick={goLogin} />
                </div>
            </header>
            <Outlet />
        </>
    );
};


const NavButton = (props) => {
    return (
        <button className={styles.navButton} {...props}>
            {props.text}
        </button>
    );
}

const LoginButton = (props) => {
    return (
        <button className={styles.loginButton} {...props}>
            <div className={styles.loginIcon} />
        </button>
    );
}

export default Header;