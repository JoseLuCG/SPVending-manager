import './NavButtons.css';

type NavButtonsProps = {
    isAbove: boolean;
}

function NavButtons({ isAbove }: NavButtonsProps) {
    
    return(
            <nav className={ isAbove ? "nav" : 'hidden' }>
                <ul>
                    <li>TENANTS</li>
                    <li>CLUBS</li>
                    <li>MÁQUINAS</li>
                    <li>USUARIOS</li>
                </ul>
            </nav>
    );
}

export default NavButtons;