import css from "./Hero.module.css";
import hero_1x from "../../images/hero/hero-mobile/hero-mobile.jpg";
import hero_2x from "../../images/hero/hero-mobile/hero-mobile2x.jpg";

export default function Hero() {
  return (
<div className={css.hero_section}>
    <div className="container">
        <h1 className={css.hero_title}>виробництво меблів</h1>
        <p className={css.hero_descr}>
          Ми виконуємо комплексне виготовлення корпусних меблів для житлових і
          комерційних приміщень, забезпечимо Вас якісним меблевим продуктом
          власного виробництва.{" "}
        </p>
        <button className={css.hero_button}>
          <span className={css.hero_button_text}>Обговорити проект</span>
        </button>
        <hr className={css.hero_button_underline}></hr>
        <div className={css.hero_slide_number_section}>
        <button className={css.hero_slide_number}>1</button>
        <button className={css.hero_slide_number}>2</button>
        <button className={css.hero_slide_number}>3</button>
        </div>
      </div>
    </div>
  );
}
