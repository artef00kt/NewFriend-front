import React from "react";
import styles from './InputA.module.scss';

const InputA = (props) => {
    return(
        <input
            className={styles.inputA} 
            {...props}

            // style={rest.width}
            style={{width: props.customwidth + "px"}}
        />
    );
}

export default InputA;