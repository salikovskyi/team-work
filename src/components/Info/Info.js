import css from "./Info.module.css";
import logo from "../../images/logo/logo.png";
import Instagram from "../svg/Instagram/Instagram";
import Facebook from "../svg/Facebook/Facebook";
import HeroPhone from "../svg/HeroPhone/HeroPhone";
export default function Info() {
  return (
    <div className={`section ${css.info_section}`}>
      <div className={`container ${css.wrapper_info}`}>
        <div className={css.info_comDescr}>
          <div className={css.left_side}>
            <a>
              <img src={logo} alt="logo" className={css.info_logo} />
            </a>
            <div className={css.network}>
              <p className={css.social_network}>Соцмережі:</p>
              <a
                href="https://www.instagram.com/osalikovskyi"
                className={css.link}
              >
                <Instagram />
              </a>
              <a
                href="https://www.facebook.com/oleg.salikovskiy"
                className={css.link}
              >
                <Facebook />
              </a>
            </div>
          </div>
          <div className={css.right_side}>
            <ul className={css.info_list}>
              <li className={css.info_item}>Основні напрямки</li>
              <li className={css.info_item}>Етапи роботи</li>
              <li className={css.info_item}>Про компанію</li>
              <li className={css.info_item}>Зараз в роботі</li>
              <li className={css.info_item}>Переваги</li>
              <li className={css.info_item}>Стати партнером</li>
            </ul>
          </div>
        </div>
        <div className={css.info_numberBtn}>
          <p className={css.info_number}>
            <HeroPhone /> <span className={css.num}>+380 67661 5415</span>
          </p>
          <button className={`button ${css.info_button}`}>
            На каву з менеджером!
          </button>
        </div>
      </div>
    </div>
  );
}
