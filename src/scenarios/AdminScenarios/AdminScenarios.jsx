import { React } from 'react';
import { Routes, Route } from 'react-router-dom'

import Header from '../../components/Header/Header.jsx'
import ErrorPage from '../../pages/ErrorPage/ErrorPage.jsx'

import AdminPage from '../../pages/AdminPage/AdminPage.jsx'
import TextPage from '../../pages/TextPage/TextPage.jsx'



const AdminScenarios = () => {
    return (
    <Routes>
        <Route path="/" element={<Header type="admin"/>}>
            <Route index element={<TextPage text={"Вы вошли как администратор"} />}/>
            <Route path="/admin/complains" element={<AdminPage />}/>
            <Route path="/admin/verifications" element={<AdminPage />}/>
            <Route path="*" element={<ErrorPage />}/>
        </Route>
    </Routes>
    );
};

export default AdminScenarios;