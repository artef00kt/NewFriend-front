import styles from './App.module.scss';

import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header.jsx'
import HelloPage from './pages/HelloPage/HelloPage.jsx'
import LoginPage from './pages/LoginPage/LoginPage.jsx'
import EditProfilePage from './pages/EditProfilePage/EditProfilePage.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import FindFriendPage from './pages/FindFriendPage/FindFriendPage.jsx'
import ChatsPage from './pages/ChatsPage/ChatsPage.jsx'



function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HelloPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/registration" element={<LoginPage />}/>

          <Route path="/chats" element={<ChatsPage />}/>
          <Route path="/findfriend" element={<FindFriendPage />}/>

          <Route path="/editprofile" element={<EditProfilePage />}/>

          <Route path="*" element={<ErrorPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
