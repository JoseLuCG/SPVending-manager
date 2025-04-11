import { useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import NavButtons from './components/NavButtons/NavButtons';
import './Aside.css';

function Aside() {
    const [ isAbove, setIsAbove ] = useState(false);

    return(
        <aside
            onMouseEnter={() => setIsAbove(true)}
            onMouseLeave={() => setIsAbove(false)}
        >
            <MenuButton isAbove={isAbove} />
            <NavButtons/>
        </aside>
    );
}

export default Aside;