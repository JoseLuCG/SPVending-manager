import { useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import NavButtons from './components/NavButtons/NavButtons';
import styles from './Aside.module.css';

function Aside() {
    const [ isAbove, setIsAbove ] = useState(false);

    return(
        <aside
            className={styles.aside}
            onMouseEnter={() => setIsAbove(true)}
            onMouseLeave={() => setIsAbove(false)}
        >
            <MenuButton isAbove={isAbove}/>
            <NavButtons isAbove={isAbove}/>
        </aside>
    );
}

export default Aside;