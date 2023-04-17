import React from "react";
import styles from './ButtonA.module.scss';

const ButtonA = ({stl=true, ...props}) => {
    const additStyle = stl ? styles.buttonA_on : styles.buttonA_off;
    return(
        <button className={styles.buttonA + " " + additStyle} {...props}>
            <p>{props.text}</p>
        </button>
    );
}

export default ButtonA;