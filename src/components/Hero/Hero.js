import css from "./Hero.module.css";
import RightArrow from "../svg/RightArrow/RIghtArrow";
import LeftArrow from "../svg/LeftArrow/LeftArrow";

export default function Hero() {
  return (
    <div className={css.hero_section}>
      <div className="container">
        <h1 className={css.hero_title}>виробництво меблів</h1>
        <p className={css.hero_descr}>
          Ми виконуємо комплексне виготовлення корпусних меблів для житлових і
          комерційних приміщень, забезпечимо Вас якісним меблевим продуктом
          власного виробництва.
        </p>
        <button className={css.hero_button}>
          <span className={css.hero_button_text}>Обговорити проект</span>
        </button>
        <hr className={css.hero_button_underline}></hr>
        <div className={css.hero_slider}>
          <ul className={css.hero_arrow_list}>
            <li className={css.hero_arrow_item}>
              <a href="" className={css.hero_arrow_link}>
                <LeftArrow />
              </a>
            </li>
            <li className={css.hero_arrow_item}>
              <a href="" className={css.hero_arrow_link}>
                <RightArrow />
              </a>
            </li>
          </ul>
           
          <div className={css.hero_slide_number_section}>
            <button className={css.hero_slide_number}>1</button>
            <button className={css.hero_slide_number}>2</button>
            <button className={css.hero_slide_number}>3</button>
          </div>
        </div>
      </div>
    </div>
  );
}
