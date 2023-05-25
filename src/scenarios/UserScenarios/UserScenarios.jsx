import { React } from 'react';
import { Routes, Route } from 'react-router-dom'
import { observer } from 'mobx-react-lite';

import Header from '../../components/Header/Header.jsx'
import ErrorPage from '../../pages/ErrorPage/ErrorPage.jsx'



import FindFriendPage from '../../pages/FindFriendPage/FindFriendPage.jsx'
import ChatsPage from '../../pages/ChatsPage/ChatsPage.jsx'
import ChatPlace from '../../pages/ChatsPage/ChatPlace/ChatPlace.jsx'
import MyProfilePage from '../../pages/MyProfilePage/MyProfilePage.jsx'
import EditProfilePage from '../../pages/EditProfilePage/EditProfilePage.jsx'



const UserScenarios = () => {
    return (
    <Routes>
        <Route path="/" element={<Header type="user"/>}>
            <Route index element={<MyProfilePage />}/>

            {/* <Route path="/myprofile" element={<MyProfilePage />}/> */}
            <Route path="/editprofile" element={<EditProfilePage />}/>
            
            <Route path="/chats" element={<ChatsPage />} >
                <Route path=":id" element={<ChatPlace />}/>
            </Route>
            <Route path="/findfriend" element={<FindFriendPage />}/>

            <Route path="*" element={<ErrorPage />}/>
        </Route>
    </Routes>
    );
};

export default observer(UserScenarios);