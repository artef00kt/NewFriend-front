import styles from './App.module.scss';

import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header.jsx'
import HelloPage from './pages/HelloPage/HelloPage.jsx'
import LoginPage from './pages/LoginPage/LoginPage.jsx'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage.jsx'
import EditProfilePage from './pages/EditProfilePage/EditProfilePage.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import FindFriendPage from './pages/FindFriendPage/FindFriendPage.jsx'
import ChatsPage from './pages/ChatsPage/ChatsPage.jsx'
import ChatPlace from './pages/ChatsPage/ChatPlace/ChatPlace.jsx'
import MyProfilePage from './pages/MyProfilePage/MyProfilePage.jsx'







function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HelloPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/registration" element={<RegistrationPage />}/>

          <Route path="/chats" element={<ChatsPage />} >
            <Route path=":id" element={<ChatPlace />}/>
          </Route>

          <Route path="/findfriend" element={<FindFriendPage />}/>

          <Route path="/editprofile" element={<EditProfilePage />}/>

          <Route path="/myprofile" element={<MyProfilePage />}/>


          <Route path="*" element={<ErrorPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
