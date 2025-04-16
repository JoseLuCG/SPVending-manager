import { NavButtonsProps } from '../../../../models/propertyModels/componentsProperties';
import { Link } from 'react-router';
import './NavButtons.css';
import { appRoutes } from '../../../../utilities/defines/routes';

function NavButtons({ isAbove }: NavButtonsProps) {
    
    return(
            <nav className={ isAbove ? "nav" : 'hidden' }>
                <ul>
                    <li>
                        <Link to={appRoutes.tenantsRoute}>
                            TENANTS
                        </Link>
                    </li>
                    <li>
                        <Link to={appRoutes.clubsRoute}>
                            CLUBS
                        </Link>
                    </li>
                    <li>
                        <Link to={appRoutes.machinesRoute}>
                            MÁQUINAS
                        </Link>
                    </li>
                    <li>
                        <Link to={appRoutes.usersRoute}>
                            USUARIOS
                        </Link>
                    </li>
                </ul>
            </nav>
    );
}

export default NavButtons;