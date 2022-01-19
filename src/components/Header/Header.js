import css from "./Header.module.css";
import logo from "../../images/logo/logo.png";
import Facebook from "../svg/Facebook/Facebook";
import Instagram from "../svg/Instagram/Instagram";
import HeroPhone from "../svg/HeroPhone/HeroPhone";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import HeaderNav from "../Header/HeaderNav/HeaderNav";
import { useSize } from "../../context/SizeProvider";

const inst = "https://www.instagram.com/?hl=ru";

function Header() {
  const { width } = useSize();
  console.log('width :>> ', width);
  return (
    <div className="container">
      <header className={css.header}>
        <span className={css.header_logo}>
          <a href={inst} target="_blank" rel="noreferrer">
            <img src={logo} alt="logo" className={css.header_logo_img} />
          </a>
        </span>
        { width >= 1200 && <HeaderNav />}
        <div className={css.header_auth_nav}>
          <ul className={css.header_social_list}>
            <li className={css.header_social_item}>
              <Instagram />
            </li>
            <li className={css.header_social_item}>
              <Facebook />
            </li>
          </ul>
          <span className={css.header_phone_icon}>
            <HeroPhone />
          </span>
          <span className={css.header_number}>+380 67661 5415</span>
          <BurgerMenu />
        </div>
      </header>
    </div>
  );
}

export default Header;
