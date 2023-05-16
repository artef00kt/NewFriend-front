import { React } from 'react';
import { Routes, Route } from 'react-router-dom'

import Header from '../../components/Header/Header.jsx'
import ErrorPage from '../../pages/ErrorPage/ErrorPage.jsx'

import HelloPage from '../../pages/HelloPage/HelloPage.jsx'
import LoginPage from '../../pages/LoginPage/LoginPage.jsx'
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage.jsx'



const GuestScenarios = () => {
    return (
    <Routes>
        <Route path="/" element={<Header type="guest"/>}>
            <Route index element={<HelloPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/registration" element={<RegistrationPage />}/>
            <Route path="*" element={<ErrorPage />}/>
        </Route>
    </Routes>
    );
};

export default GuestScenarios;