import styles from './Header.module.css';
import userIcon from './../../../assets/icons/UserIcon.svg';
import { useContext, useEffect, useState } from 'react';
import { Admin } from '../../../contexts/AdminContext';

function Header() {
    const [admin, setAdmin] = useContext(Admin);
    const [ adminUser, setAdminUser ] = useState("User Name");

    useEffect(
        ()=> {
            console.log(admin);
            
        }
    );

    useEffect(
        () => {
            if (admin != null) {
                const user:string = admin.name
                setAdminUser(user);
            }
        }, [admin]
    );

    return(
        <header className={styles.header}>
            <h1>SPVending Manager</h1>
            <div>
                <h2>{adminUser}</h2>
                <div className={styles.picContainer}>
                    <img src={userIcon} alt="profile pic" height="60" width="60"/>
                </div>
            </div>
        </header>
    );
}

export default Header;