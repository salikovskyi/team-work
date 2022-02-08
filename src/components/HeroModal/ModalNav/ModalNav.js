import css from "./ModalNav.module.css";
import Facebook from "../../svg/Facebook/Facebook";
import Instagram from "../../svg/Instagram/Instagram";
import HeroPhone from "../../svg/HeroPhone/HeroPhone";

export default function ModalNav() {
  return (
    <nav className={css.header_nav}>
      <ul className={css.header_list}>
        <li className={css.header_item}>
          <a href="#" className={css.header_link}>
            Напрямки
          </a>
        </li>
        <li className={css.header_item}>
          <a href="#" className={css.header_link}>
            Про компанію
          </a>
        </li>
        <li className={css.header_item}>
          <a href="#" className={css.header_link}>
            Переваги
          </a>
        </li>
        <li className={css.header_item}>
          <a href="#" className={css.header_link}>
            Етапи роботи
          </a>
        </li>
      </ul>
      <ul className={css.modal_social_list}>
        <li className={css.modal_social_item}>
          <Instagram />
        </li>
        <li className={css.modal_social_item}>
          <Facebook />
        </li>
      </ul>
      <div className={css.modal_phoneNumber_div}>
      <span className={css.modal_phone_icon}>
        <HeroPhone />
      </span>
      <span className={css.modal_number}>+380 67661 5415</span>
      </div>
      <button className={`button ${css.modal_button_btn}`}>
          Обговорити проект
        </button>
    </nav>
  );
}
