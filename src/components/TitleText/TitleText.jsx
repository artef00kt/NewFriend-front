import React from "react";
import styles from './TitleText.module.scss';

const TitleText = ({children}) => {
    return(
        <div className={styles.titleTextContaineer}>
            <p className={styles.titleText}>{children}</p>
        </div>
    );
}

export default TitleText;