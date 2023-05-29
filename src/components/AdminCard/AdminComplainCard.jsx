import React, { useContext } from "react";

import { Context } from '../../';

import styles from './AdminCard.module.scss';

import ButtonA from "../ButtonA/ButtonA.jsx"

const AdminComplainCard = (props) => {
    const {store} = useContext(Context);

    const ban = () => {
        store.setBanUser(props.data.id).then(() => {
            props.rerender();
        })
    };

    const noban = () => {
        store.setNoBanUser(props.data.id).then(() => {
            props.rerender();
        })
    };

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
                    <p>{props.data.year}, {props.data.sex === 'М' ? 'мужчина' : 'женщина'}</p>
                    <p>{props.data.zodiacSign}</p>
                    <div className={styles.informContaineer__description}> 
                        <p>{props.data.description}</p>
                    </div>
                </div>
            </div>
            <div className={styles.cardContaineer__complain}>
                <p><span>Жалоба: </span>{props.data.text}</p>
            </div>
            <div className={styles.cardContaineer__buttons}>
                <ButtonA text={"Заблокировать"} onClick={ban}/>
                <ButtonA text={"Не блокировать"} onClick={noban}/>
            </div>
        </div>
    );
}

export default AdminComplainCard;