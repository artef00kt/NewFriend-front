import React, { useState } from "react";
import styles from './EditProfilePage.module.scss';

import { useNavigate } from "react-router-dom";

import ButtonA from "../../components/ButtonA/ButtonA.jsx"
import InputA from "../../components/InputA/InputA.jsx"
import TitleText from "../../components/TitleText/TitleText.jsx"

const EditProfilePage = () => {
    const navigate = useNavigate();
    const goBack = () => { navigate(-1) }

    const [sexBtn, setSexBtn] = useState(true);
    const manBtn = () => {setSexBtn(true); setFormData({...formData, sex: 'M'});};
    const womanBtn = () => {setSexBtn(false); setFormData({...formData, sex: 'W'});};

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(formData);
        // console.log(sexBtn);
    }

    const [formData, setFormData] = useState({
        fname: '',
        birthdate: '',
        city: '',
        photo: '',
        description: '',
        sex: 'M',
    });

    const onChangeForm = (e) => setFormData({...formData, [e.target.name]: e.target.value});

    return (
        <section className={styles.contentContaineer + " " + styles.editProfilePage}>
            <div style={{marginTop: 30 + "px"}}>
                <TitleText> Редактирование профиля </TitleText>
            </div>

            <form onSubmit={onSubmitForm}>
                <div className={styles.charactPhotoContaineer}>
                    <div className={styles.charactContaineer}>
                        <InputA 
                            customwidth={350}
                            onChange={onChangeForm}
                            name={"fname"}
                            type={"text"}
                            placeholder={"Имя"}/>

                        <InputA 
                            customwidth={350}
                            onChange={onChangeForm}
                            name={"birthdate"}
                            type={"date"}/>

                        <div className={styles.sexButtonsContaineer}>
                            <ButtonA 
                                type={"button"}
                                stl={sexBtn}
                                text={"Муж."}
                                onClick={manBtn}/>
                            <ButtonA 
                                type={"button"}
                                stl={!sexBtn}
                                text={"Жен."}
                                onClick={womanBtn}/>
                        </div>

                        <InputA 
                            customwidth={350}
                            onChange={onChangeForm}
                            name={"city"}
                            type={"text"}
                            placeholder={"Город"}/>
                    </div>

                    <InputImage 
                        onChange={onChangeForm}
                        name={"photo"}
                        id={"inputPhoto"}/>
                </div>

                <InputTextAreaA 
                    onChange={onChangeForm}
                    placeholder={"Описание"}
                    name={"description"} />

                <div className={styles.confirmButtonsContaineer}>
                    <ButtonA 
                        onClick={goBack}
                        type={"button"}
                        text={"Отмена"}/>

                    <ButtonA 
                        type={"submit"}
                        text={"Сохранить"}/>
                    
                </div>
                
            </form>
            
            
        </section>
    );
}

const InputTextAreaA = (props) => {
    return(
        <textarea className={styles.inputTextAreaA} 
            {...props}/>

    );
}

const InputImage = (props) => {
    return(
        <div className={styles.inputImageContaineer}>
            <input className={styles.inputImage}
                type={"file"}
                accept={"image/*"}
                {...props}>
            </input>
            <label className={styles.inputImageLabel}
                htmlFor={props.id}
            ></label>
        </div>
        
    );
}

export default EditProfilePage;