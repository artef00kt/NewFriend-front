import React, { useContext } from "react";

import { Context } from '../../';

import styles from './AdminCard.module.scss';

import ButtonA from "../ButtonA/ButtonA.jsx"

const AdminVerificationCard = (props) => {
    const {store} = useContext(Context);

    const verify = () => {
        store.setVerifyUser(props.data.login).then(() => {
            props.rerender();
        })
    }

    const noverify = () => {
        store.setNoVerifyUser(props.data.login).then(() => {
            props.rerender();
        })
    }

    return(
        <div className={styles.cardContaineer}>
            <div className={styles.cardContaineer__inform}>
                <div className={styles.photoPlugCont}>
                    <img className={styles.photoPlug} src={`data:image/png;base64,${props.data.image}`} alt="avatar"/>
                </div>
                <div className={styles.informContaineer}>
                    <div className={styles.informContaineer__nc}>
                        <p className={styles.informContaineer__nc_name}>{props.data.name}</p> 
                        <p className={styles.informContaineer__nc_city}>{props.data.city}</p>
                    </div>
                    <p>{props.data.year} лет, {props.data.sex === 'М' ? 'мужчина' : 'женщина'}</p>
                    <p>{props.data.zodiacSign}</p>
                    <div className={styles.informContaineer__description}> 
                        <p>{props.data.description}</p>
                    </div>
                </div>
            </div>
            <div className={styles.cardContaineer__buttons}>
                <ButtonA text={"Допустить"} onClick={verify} />
                <ButtonA text={"Не допускать"} onClick={noverify} />
            </div>
        </div>
    );
}

export default AdminVerificationCard;