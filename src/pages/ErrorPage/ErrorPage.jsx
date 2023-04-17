import { React } from 'react'

import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
    return(
        <div className={styles.contentContaineer + " " + styles.errorPageContaineer}>
            <p className={styles.errorStyleP}>Error / Ошибка</p>
        </div>
    );
}

export default ErrorPage;