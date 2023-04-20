import React from "react";

import styles from './AdminCard.module.scss';

import ButtonA from "../ButtonA/ButtonA.jsx"

const AdminVerificationCard = () => {
    return(
        <div className={styles.cardContaineer}>
            <div className={styles.cardContaineer__inform}>
                <div className={styles.photoPlug} />
                <div className={styles.informContaineer}>
                    <div className={styles.informContaineer__nc}>
                        <p className={styles.informContaineer__nc_name}>Артем</p> 
                        <p className={styles.informContaineer__nc_city}>Самара</p>
                    </div>
                    <p>20 лет, мужчина</p>
                    <p>Скорпион</p>
                    <div className={styles.informContaineer__description}> 
                        <p>привет, я артем, тут крч описание будет, хех, че еще написать хз, вставлю сюда много текста, чтобы было понятно как выглядеть будет, вот еще текст, ну круто пока что выглядить, хз хз 
                        привет, я артем, тут крч описание будет, хех, че еще написать хз, вставлю сюда много текста, чтобы было понятно как выглядеть будет, вот еще текст, ну круто пока что выглядить, хз хз 
                        привет, я артем, тут крч описание будет, хех, че еще написать хз, вставлю сюда много текста, чтобы было понятно как выглядеть будет, вот еще текст, ну круто пока что выглядить, хз хз
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.cardContaineer__buttons}>
                <ButtonA text={"Допустить"} />
                <ButtonA text={"Не допускать"} />
            </div>
        </div>
    );
}

export default AdminVerificationCard;