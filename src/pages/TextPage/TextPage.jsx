import { React } from 'react'

import styles from './TextPage.module.scss';

const TextPage = (props) => {
    return(
        <div className={styles.contentContaineer + " " + styles.textPageContaineer}>
            <p className={styles.textStyleP}>{props.text}</p>
        </div>
    );
}

export default TextPage;