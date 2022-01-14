import css from './Hero.module.css'





export default function Hero () {
    return (
        <div className={css.hero_section}>
        <h1 className={css.hero_title}>виробництво меблів</h1>
        <p className={css.hero_descr}>Ми виконуємо комплексне виготовлення корпусних меблів для житлових і комерційних приміщень, забезпечимо Вас якісним меблевим продуктом власного виробництва. </p>
        <button className={css.hero_button}>
         <span className={css.hero_button_text}>Обговорити проект</span>
        </button>
        </div>
    )
}