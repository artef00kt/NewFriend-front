import { React } from 'react';
import { Routes, Route } from 'react-router-dom'

import Header from '../../components/Header/Header.jsx'
import ErrorPage from '../../pages/ErrorPage/ErrorPage.jsx'

import EditProfilePage from '../../pages/EditProfilePage/EditProfilePage.jsx'



const NewUserScenarios = () => {
    return (
    <Routes>
        <Route path="/" element={<Header type="newuser"/>}>
            <Route index element={<ErrorPage />}/>

            {/* <Route path="/editprofile" element={<EditProfilePage />}/> */}

            <Route path="*" element={<ErrorPage />}/>
        </Route>
    </Routes>
    );
};

export default NewUserScenarios;