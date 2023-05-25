import React, { useContext } from "react";
import styles from './Header.module.scss';

import { Context } from '../../';

import { Outlet } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Header = (props) => {
    const navigate = useNavigate();
    const {store} = useContext(Context);

    const goHome = () => {navigate('/')}
    const goMyProfile = () => {navigate('/')}
    const goChats = () => {navigate('/chats')}
    const goFindFriend = () => {navigate('/findfriend')}

    const goComplains = () => {navigate('/admin/complains')}
    const goVerifications = () => {navigate('/admin/verifications')}

    const goLogin = () => {navigate('/login')}
    const goLogout = () => { store.logout(); navigate('/');}

    const goNowhere = () => {}

    const clickedLogo = props.type === "guest" ? styles.clickedLogo : ""
    return (
        <>
            <header className={styles.header}>
                <div className={styles.containeer}>
                    <div className={styles.leftHeader}>
                        <div className={styles.logo + " " + styles.headerLogo + " " + clickedLogo} onClick={props.type === "guest" ? goHome : goNowhere} />
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
                    {props.type === "guest" ? <LoginButton onClick={goLogin} /> : <LogoutButton onClick={goLogout} />}
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

const LogoutButton = (props) => {
    return (
        <button className={styles.loginButton} {...props}>
            <div className={styles.logoutIcon} />
        </button>
    );
}

export default Header;