import css from "./Stages.module.css";

export default function Stages() {
  return (
    <div className={`section ${css.stages_section}`}>
      <div className="container">
        <h2 className={css.stages_title}>Етапи роботи</h2>
        <ul className={css.stages_list}>
          <li className={css.stages_item}>
            <p className={css.stages_number}>01</p>
            <h3 className={css.stages_subtitle}>Підписання договору</h3>
            <p className={css.stages_descr}>
              Визначаємось з бюджетом, матеріалами та фурнітурою. Вносимо правки
              в проект, підписуємо пакет документів.
            </p>
          </li>
          <li className={css.stages_item}>
            <p className={css.stages_number}>02</p>
            <h3 className={css.stages_subtitle}>Виготовлення </h3>
            <p className={css.stages_descr}>
              Після підписання договору та визначення термінів, команда Рінго
              приступає до найцікавішого - виробництва!
            </p>
          </li>
          <li className={css.stages_item}>
            <p className={css.stages_number}>03</p>
            <h3 className={css.stages_subtitle}>Встановлення</h3>
            <p className={css.stages_descr}>
              По готовності виробництва починаємо монтаж на обєкті. У домовлений
              час виконуємо доставку та монтаж.
            </p>
          </li>
          <li className={css.stages_item}>
            <p className={css.stages_number}>04</p>
            <h3 className={css.stages_subtitle}>Новосілля</h3>
            <p className={css.stages_descr}>
              По закінченню робимо перевірку та підписуємо акт закінчення робіт.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
