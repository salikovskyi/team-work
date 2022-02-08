import css from "./HeroModal.module.css";
import logo from "../../images/logo/logo.png";

import ModalNav from './ModalNav/ModalNav'
import { useSize } from "../../context/SizeProvider";
export default function HeroModal({ active }) {
  const { width } = useSize();
  return (
    <div className={`${active ? css.hero_modal_active : css.hero_modal_closed} ${css.hero_modal}`}>
      <img src={logo} alt="logo" className={css.hero_logo_modal} />
      {width < 1200 && <ModalNav />}
    </div>
    
  );
}

