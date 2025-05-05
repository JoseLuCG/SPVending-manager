import styles from './NavButtons.module.css';
import { NavButtonsProps } from './../../../../../domain/entities/property-models/componentsProperties';
import { Link, useNavigate } from 'react-router';
import { appRoutes } from '../../../../../utilities/defines/routes';
import { useContext } from 'react';
import { SelectedItem } from '../../../../../contexts/SelectedItemContext';

function NavButtons({ isAbove }: NavButtonsProps) {
    const [ item, setItem ]= useContext(SelectedItem);
    const navigate = useNavigate();

    function onClickHanderTenant() {
        setItem(null);
        navigate(appRoutes.tenantsRoute);
    }

    function onClickHanderClub() {
        setItem(null);
        navigate(appRoutes.clubsRoute);
    }

    function onClickHanderMachine() {
        setItem(null);
        navigate(appRoutes.machinesRoute);
    }

    function onClickHanderUser() {
        setItem(null);
        navigate(appRoutes.usersRoute);
    }
    
    return(
            <nav className={ isAbove ? styles.nav : styles.hidden }>
                <ul>
                    <li onClick={onClickHanderTenant}>
                        TENANTS
                    </li>
                    <li onClick={onClickHanderClub}>
                        CLUBS
                    </li>
                    <li onClick={onClickHanderMachine}>
                        MÁQUINAS
                    </li>
                    <li onClick={onClickHanderUser}>
                        USUARIOS
                    </li>
                </ul>
            </nav>
    );
}

export default NavButtons;