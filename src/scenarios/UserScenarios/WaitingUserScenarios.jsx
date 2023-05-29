import { React } from 'react';
import { Routes, Route } from 'react-router-dom'

import Header from '../../components/Header/Header.jsx'
import ErrorPage from '../../pages/ErrorPage/ErrorPage.jsx'

import TextPage from '../../pages/TextPage/TextPage.jsx'




const WaitingUserScenarios = () => {
    return (
    <Routes>
        <Route path="/" element={<Header type="waitinguser"/>}>
            <Route index element={<TextPage text={"Ожидайте подтверждения"} />}/>

            <Route path="*" element={<ErrorPage />}/>
        </Route>
    </Routes>
    );
};

export default WaitingUserScenarios;