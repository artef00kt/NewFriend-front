import styles from './App.module.scss';

import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

// import { Routes, Route } from 'react-router-dom'

import { Context } from '.';

// import Header from './components/Header/Header.jsx'
// import HelloPage from './pages/HelloPage/HelloPage.jsx'
// import LoginPage from './pages/LoginPage/LoginPage.jsx'
// import RegistrationPage from './pages/RegistrationPage/RegistrationPage.jsx'
// import EditProfilePage from './pages/EditProfilePage/EditProfilePage.jsx'
// import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
// import FindFriendPage from './pages/FindFriendPage/FindFriendPage.jsx'
// import ChatsPage from './pages/ChatsPage/ChatsPage.jsx'
// import ChatPlace from './pages/ChatsPage/ChatPlace/ChatPlace.jsx'
// import MyProfilePage from './pages/MyProfilePage/MyProfilePage.jsx'


// import AdminPage from './pages/AdminPage/AdminPage.jsx'



import GuestScenarios from './scenarios/GuestScenarios/GuestScenarios.jsx'
import UserScenarios from './scenarios/UserScenarios/UserScenarios.jsx'
import AdminScenarios from './scenarios/AdminScenarios/AdminScenarios.jsx'


function App() {
  const {store} = useContext(Context);
  // useEffect(() =>{ 
  //   store.checkAuth();
  // }, []) 
  
  // console.log(store.user);
  const a = () =>{store.checkAuth()};
  return (
    <div className={styles.app}>
      <h1>{store.isAuth ? `авторизован ${store.user.login}` : `не авторизован`}</h1>

      <GuestScenarios />
      <button onClick={a}>asd</button>
    </div>
  );
}

export default observer(App);
