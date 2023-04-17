import { React } from 'react'
import styles from './FindFriendPage.module.scss';

import TitleText from "../../components/TitleText/TitleText.jsx"
// import ButtonA from "../../components/ButtonA/ButtonA.jsx"

const FindFriendPage = () => {

    const beFr = () => {
        console.log("дружить");
    }
    
    const notBeFr = () => {
        console.log("не дружить");
    }

    return(
        <div className={styles.contentContaineer + " " + styles.ffPage}>
            <div style={{marginTop: 30 + "px"}}>
                <TitleText> Поиск друзей</TitleText>
            </div>
            <div style={{marginTop: 70 + "px", marginBottom: 30 + "px"}}>
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
                    <div className={styles.btnsContaineer}>
                        <BtnsB onClick={notBeFr} stl={false}>Не дружить</BtnsB>
                        <BtnsB onClick={beFr} stl={true}>Дружить</BtnsB>
                    </div>
                </div>
            </div>
            
        </div>
    );
}


const BtnsB = ({stl=true, children, ...props}) => {
    const additStyle = stl ? styles.btnsB_acpt : styles.btnsB_deny;
    return (
        <button className={styles.btnsB + " " + additStyle} {...props}>
            {children}
        </button>
    );
}

export default FindFriendPage;