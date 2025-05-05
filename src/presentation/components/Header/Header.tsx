import styles from './Header.module.css';
import userIcon from './../../../assets/icons/UserIcon.svg';
import { useState } from 'react';

function Header() {
    const [ admin, /*setAdmin*/ ] = useState("User Name");

    return(
        <header className={styles.header}>
            <h1>SPVending Manager</h1>
            <div>
                <h2>{admin}</h2>
                <div className={styles.picContainer}>
                    <img src={userIcon} alt="profile pic" height="60" width="60"/>
                </div>
            </div>
        </header>
    );
}

export default Header;