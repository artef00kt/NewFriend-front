import React, { useState, useContext, useEffect } from "react";
import styles from './ComplainPage.module.scss';

import { useNavigate, useParams } from "react-router-dom";

import { Context } from '../../';

import ButtonA from "../../components/ButtonA/ButtonA.jsx"
import TitleText from "../../components/TitleText/TitleText.jsx"


const ComplainPage = () => {
    const {store} = useContext(Context);
    const navigate = useNavigate();
    const {id} = useParams();

    const [complainData, setCompainData] = useState('');
    const inputComplain = (e) => setCompainData(e.target.value);

    const backBtn = () => navigate(-1);
    const sendBtn = () => {
        const temp = {
            victim : id,
            text: complainData
        };
        store.sendComplain(temp).then(() => navigate(-1));
    };

    return(
        <div className={styles.contentContaineer + ' ' + styles.complainPage} >
            <div style={{marginTop: 30 + "px", marginBottom: 40 + "px",}}>
                <TitleText> Жалоба</TitleText>
            </div>

            <InputTextAreaA
                onChange={inputComplain}
                placeholder={`Введите текст жалобы на ${id}`} />

            <div className={styles.btnsCont}>
                <ButtonA text="Назад" onClick={backBtn}/>
                <ButtonA text="Отправить" onClick={sendBtn}/>
            </div>

        </div>
    );
}

const InputTextAreaA = (props) => {
    return(
        <textarea className={styles.inputTextAreaA} 
            {...props}/>
    );
}

export default ComplainPage;
