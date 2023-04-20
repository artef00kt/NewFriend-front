import { React } from 'react'
import styles from './MyProfilePage.module.scss';
import { useNavigate } from "react-router-dom";

import TitleText from "../../components/TitleText/TitleText.jsx"
import ButtonA from "../../components/ButtonA/ButtonA.jsx"


const MyProfile = () => {
    const navigate = useNavigate();

    const goEdit = () => { navigate('/editprofile') }


    return(
        <div className={styles.contentContaineer + " " + styles.ffPage}>
            <div style={{marginTop: 30 + "px"}}>
                <TitleText> Ваш профиль</TitleText>
            </div>
            <div style={{marginTop: 50 + "px", marginBottom: 30 + "px"}}>
                <div className={styles.ffCardContaineer}>
                    <div className={styles.informContaineer}>
                        <div className={styles.photoPlug} />
                        <div className={styles.infTextContaineer}>
                            <div className={styles.nameCity}>
                                <p className={styles.infName}>Артем</p> 
                                <p className={styles.infCity}>Самара</p>
                            </div>
                            <p>20 лет, мужчина</p>
                            <p>Скорпион</p>
                            <div className={styles.manyTextInfCont}> 
                                <p>привет, я артем, тут крч описание будет, хех, че еще написать хз, вставлю сюда много текста, чтобы было понятно как выглядеть будет, вот еще текст, ну круто пока что выглядить, хз хз 
                                привет, я артем, тут крч описание будет, хех, че еще написать хз, вставлю сюда много текста, чтобы было понятно как выглядеть будет, вот еще текст, ну круто пока что выглядить, хз хз 
                                привет, я артем, тут крч описание будет, хех, че еще написать хз, вставлю сюда много текста, чтобы было понятно как выглядеть будет, вот еще текст, ну круто пока что выглядить, хз хз
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div>
                <ButtonA text={"Редактировать профиль"} onClick={goEdit} />
            </div>
            
        </div>
    );
}

export default MyProfile;