import css from './BurgerMenu.module.css'
import { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import HeroModal from '../HeroModal/HeroModal'
const BurgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
    }
  });

  return (
    <div>
      <nav className={css.burger_icon}>
        <span onClick={() => setShowMenu(!showMenu)}>
          <Hamburger size={25} />
        </span>
      </nav>
      <HeroModal active={showMenu} setActive={setShowMenu} />
    </div>
  );
};

export default BurgerMenu;
