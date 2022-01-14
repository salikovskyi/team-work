import css from "./Hero.module.css";
import hero_1x from "../../images/hero/hero-mobile/hero-mobile.jpg";
import hero_2x from "../../images/hero/hero-mobile/hero-mobile2x.jpg";

export default function Hero() {
  return (
    <div className="container">
      <div className={css.hero_section}>
        <h1 className={css.hero_title}>виробництво меблів</h1>
        <p className={css.hero_descr}>
          Ми виконуємо комплексне виготовлення корпусних меблів для житлових і
          комерційних приміщень, забезпечимо Вас якісним меблевим продуктом
          власного виробництва.{" "}
        </p>
        <button className={css.hero_button}>
          <span className={css.hero_button_text}>Обговорити проект</span>
        </button>
        {/* <span className={css.underline}></span> */}
        <hr className={css.hero_button_underline}></hr>
        <div className={css.hero_slide_number_section}>
        <p className={css.hero_slide_number}>1</p>
        <p className={css.hero_slide_number}>2</p>
        <p className={css.hero_slide_number}>3</p>
        </div>
      </div>
    </div>
  );
}
