import { useState } from 'react';
import Button from './Button'
import NavOverlay from './NavOverlay';

import styles from './header.module.css';

const Header = () => {
    const [isMenuVisible, setMenuVibsible] = useState (false);
    return <header className={styles.header}>
        <Button 
        label="Menu" 
        clickHandler={() => {
            setMenuVibsible(true);
        }}
        />
        {isMenuVisible && 
        <NavOverlay 
            closeHandler={() => {
                setMenuVibsible(false);
            }}
        />
    }
        </header>
}
export default Header