import css from './BurgerMenu.module.css'
import { useState } from 'react';
import Hamburger from 'hamburger-react';

const BurgerMenu = () => {
    const [showMenu, setShowMenu] = useState(false)
    const onClick = () => {
        setShowMenu(!showMenu)
    }


    return (
        <nav className={css.burger_icon}>
            <span>
            <Hamburger
            size={25}
            onClick={onClick}
            />
            </span>
        </nav>
    )
}

export default BurgerMenu;