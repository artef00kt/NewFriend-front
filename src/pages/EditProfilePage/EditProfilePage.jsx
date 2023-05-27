import React, { useState, useContext } from "react";
import styles from './EditProfilePage.module.scss';

import { useNavigate } from "react-router-dom";

import { Context } from '../../';

import ButtonA from "../../components/ButtonA/ButtonA.jsx"
import InputA from "../../components/InputA/InputA.jsx"
import TitleText from "../../components/TitleText/TitleText.jsx"

const EditProfilePage = (props) => {
    const nu = props.newuser === true;

    const {store} = useContext(Context);

    const navigate = useNavigate();
    const goBack = () => { navigate(-1) }

    const [sexBtn, setSexBtn] = useState(true);
    const manBtn = () => {setSexBtn(true); setFormData({...formData, sex: 'M'});};
    const womanBtn = () => {setSexBtn(false); setFormData({...formData, sex: 'W'});};
    const [formData, setFormData] = useState({
        login: store.user.login,
        'name': '',
        birthdate: '',
        city: '',
        image: '',
        description: '',
        sex: 'M',
        zodiacSign : "Скорпион",
    });

    //const [fileData, setFileData] = useState();

    const onChangeForm = (e) => setFormData({...formData, [e.target.name]: e.target.value});
    const onChangeFormFile = (e) => setFormData({...formData, [e.target.name]: e.target.files[0]});
    const onImage = (e) => {
        console.log(formData.image);

        const newForm = new FormData();
        newForm.append('login', formData.login)
        newForm.append('name', formData.name)
        newForm.append('image', formData.image);
        //formData.image = newForm;
        newForm.append('sex', formData.sex)
        newForm.append('description', formData.description)
        newForm.append('birthdate', formData.birthdate)
        newForm.append('city', formData.city)
        newForm.append('zodiacSign', formData.zodiacSign)

        

        console.log(formData);
        store.sendUserData(formData);

    }

    const onSubmitForm = (e) => {
        e.preventDefault();

        console.log(formData);
        store.sendUserData(formData);
        // console.log(sexBtn);
    }

    return (
        <section className={styles.contentContaineer + " " + styles.editProfilePage}>
            <div style={{marginTop: 30 + "px"}}>
                <TitleText> {nu ? 'Создание профиля' : 'Редактирование профиля'} </TitleText>
            </div>

            <form onSubmit={onSubmitForm}>
                <div className={styles.charactPhotoContaineer}>
                    <div className={styles.charactContaineer}>
                        <InputA 
                            customwidth={350}
                            onChange={onChangeForm}
                            name={"name"}
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
                        onChange={onChangeFormFile}
                        name={"image"}
                        id={"inputPhoto"}/>
                </div>

                <InputTextAreaA 
                    onChange={onChangeForm}
                    placeholder={"Описание"}
                    name={"description"} />

                <div className={styles.confirmButtonsContaineer}>
                    {nu ? <></> : 
                    <ButtonA 
                        onClick={goBack}
                        type={"button"}
                        text={"Отмена"}/>
                    }

                    <ButtonA 
                        onClick={onImage}
                        type={"button"}
                        text={"test"}/>

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