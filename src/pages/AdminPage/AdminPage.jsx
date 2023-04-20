import { React } from 'react'
import styles from './AdminPage.module.scss';

import { useLocation } from 'react-router-dom';

import TitleText from "../../components/TitleText/TitleText.jsx"
import AdminComplainCard from "../../components/AdminCard/AdminComplainCard.jsx"
import AdminVerificationCard from "../../components/AdminCard/AdminVerificationCard.jsx"


const AdminPage = () => {
    const location = useLocation();
    console.log(location.pathname);
    const isVerif = location.pathname === "/admin/verifications";
    console.log(isVerif);

    return(
        <div className={styles.contentContaineer + " " + styles.admin}>
            <div style={{marginTop: 30 + "px"}}>
                <TitleText>{isVerif ? "Верификации" : "Жалобы"}</TitleText>
            </div>
            <div className={styles.admin__cards}>
            {isVerif ?
            <>
                <AdminVerificationCard/>
                <AdminVerificationCard/>
                <AdminVerificationCard/>
                <AdminVerificationCard/>
            </>
            :
            <>
                <AdminComplainCard/>
                <AdminComplainCard/>
                <AdminComplainCard/>
                <AdminComplainCard/>
            </>
            }
            </div>
            
        </div>
    );
}

export default AdminPage;