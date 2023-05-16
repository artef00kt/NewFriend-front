import React from "react";
import styles from './Header.module.scss';

import { Outlet } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Header = (props) => {
    const navigate = useNavigate();

    const goHome = () => {navigate('/')}
    const goMyProfile = () => {navigate('/myprofile')}
    const goChats = () => {navigate('/chats')}
    const goFindFriend = () => {navigate('/findfriend')}

    const goComplains = () => {navigate('/admin/complains')}
    const goVerifications = () => {navigate('/admin/verifications')}

    const goLogin = () => {navigate('/login')}

    const clickedLogo = props.type === "guest" ? styles.clickedLogo : ""
    return (
        <>
            <header className={styles.header}>
                <div className={styles.containeer}>
                    <div className={styles.leftHeader}>
                        <div className={styles.logo + " " + styles.headerLogo + " " + clickedLogo} onClick={props.type === "guest" ? goHome : ""} />
                        {props.type === "guest" || props.type === "newuser" ? 
                        <></> : 
                        <>
                            {props.type === "admin" ? 
                            <>
                                <NavButton onClick={goComplains} text="Жалобы"/>
                                <NavButton onClick={goVerifications} text="Подтверждения"/>
                            </> : 
                            <>
                                <NavButton onClick={goMyProfile} text="Мой профиль"/>
                                <NavButton onClick={goChats} text="Чаты"/>
                                <NavButton onClick={goFindFriend} text="Поиск друзей"/>
                            </>}
                        </>
                        }
                    </div>
                    {props.type === "guest" ? <LoginButton onClick={goLogin} /> : <></>}
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