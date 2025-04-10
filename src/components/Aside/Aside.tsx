import { useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import './Aside.css';

function Aside() {
    const [ isVisible, setIsVisible ] = useState(true);

    return(
        <aside
            onMouseEnter={() => setIsVisible(false)}
            onMouseLeave={() => setIsVisible(true)}
        >
            <MenuButton isVisible={isVisible} />
        </aside>
    );
}

export default Aside;