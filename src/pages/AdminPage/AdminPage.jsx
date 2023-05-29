import React, { useEffect, useState, useContext } from 'react'
import styles from './AdminPage.module.scss';

import { Context } from '../../';

import { useLocation } from 'react-router-dom';

import TitleText from "../../components/TitleText/TitleText.jsx"
import AdminComplainCard from "../../components/AdminCard/AdminComplainCard.jsx"
import AdminVerificationCard from "../../components/AdminCard/AdminVerificationCard.jsx"


const AdminPage = () => {
    const location = useLocation();
    //console.log(location.pathname);
    const isVerif = location.pathname === "/admin/verifications";
    //console.log(isVerif);

    const {store} = useContext(Context);

    const [rerender, setRerender] = useState(0);
    const rerend = () => {setRerender(rerender+1)}
    const [usersDataList, setUsersDataList] = useState([]);

    useEffect(() => {
        if (isVerif) {
            store.getVerificationsUsersList().then((res) => {
                setUsersDataList(res);
            });
        }
        else {
            store.getComplaintsUsersList().then((res) => {
                setUsersDataList(res);
            });
        }
    }, [isVerif, rerender]);



    return(
        <div className={styles.contentContaineer + " " + styles.admin}>
            <div style={{marginTop: 30 + "px"}}>
                <TitleText>{isVerif ? "Верификации" : "Жалобы"}</TitleText>
            </div>
            <div className={styles.admin__cards}>
            {isVerif ?
            <>
                {usersDataList.map((data, index) => 
                    <AdminVerificationCard  key={index} data={data} rerender={rerend}/>
                )}
                {usersDataList.length === 0 ? <p className={styles.pinfo}>Список подтверждений пуст</p> : ""}
            </>
            :
            <>
                {usersDataList.map((data, index) => 
                    <AdminComplainCard  key={index} data={data} rerender={rerend}/>
                )}
                {usersDataList.length === 0 ? <p className={styles.pinfo}>Список жалоб пуст</p> : ""}
            </>
            }
            </div>
            
        </div>
    );
}

export default AdminPage;