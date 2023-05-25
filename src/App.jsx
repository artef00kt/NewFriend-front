import styles from './App.module.scss';

import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '.';

import GuestScenarios from './scenarios/GuestScenarios/GuestScenarios.jsx'
import UserScenarios from './scenarios/UserScenarios/UserScenarios.jsx'
import AdminScenarios from './scenarios/AdminScenarios/AdminScenarios.jsx'

import NewUserScenarios from './scenarios/UserScenarios/NewUserScenarios.jsx'



function App() {
  const {store} = useContext(Context);
  // useEffect(() =>{ 
  //   store.checkAuth();
  // }, []) 
  
  // console.log(store.user);

  useEffect(() => {
    store.checkAuth();
  }, []);

  const renderSwitch = (param) => {
    switch(param) {
      case 'ROLE_USER':
        return <UserScenarios />;
      case 'ROLE_ADMIN':
        return <AdminScenarios />;
      case 'ROLE_WAITING':
        return 'в разработке епт';
      case 'ROLE_LOCK':
        return 'в разработке епт';
      case 'ROLE_NEW':
        return <NewUserScenarios />;
      default:
        return <GuestScenarios />;
    }
  };

  return (
    <div className={styles.app}>
      {/* <h1>{store.isAuth ? `авторизован ${store.user.login} ${store.user.role}` : `не авторизован`}</h1> */}
      { store.isAuth ? 
      <> {renderSwitch(store.user.role)} </>
      : 
      <GuestScenarios /> }
    </div>
  );
}

export default observer(App);
