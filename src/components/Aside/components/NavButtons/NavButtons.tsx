import { NavButtonsProps } from '../../../../models/propertyModels/componentsProperties';
import { Link } from 'react-router';
import './NavButtons.css';

function NavButtons({ isAbove }: NavButtonsProps) {
    
    return(
            <nav className={ isAbove ? "nav" : 'hidden' }>
                <ul>
                    <li>
                        <Link to={"/tenants"}>
                            TENANTS
                        </Link>
                    </li>
                    <li>
                        <Link to={"/clubs"}>
                            CLUBS
                        </Link>
                    </li>
                    <li>
                        <Link to={"/machines"}>
                            MÁQUINAS
                        </Link>
                    </li>
                    <li>USUARIOS</li>
                </ul>
            </nav>
    );
}

export default NavButtons;