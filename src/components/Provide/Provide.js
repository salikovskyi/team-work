import css from "./Provide.module.css";
import BurnerOver from "../svg/BurnerOver/BurnerOver";

export default function Provide() {
  return (
    <div className={css.provide_section}>
      <div className="container">
        <h2 className={css.provide_title}>Ми забезпечемо вас </h2>

        <ul className={css.provide_list}>
        <li className={css.provide_item}>
            <BurnerOver />
            <h3 className={css.provide_descr}>Меблями</h3>
          </li>
          <li className={css.provide_item}>
            <BurnerOver />
            <h3 className={css.provide_descr}>Освітленням</h3>
          </li>
          <li className={css.provide_item}>
            <BurnerOver />
            <h3 className={css.provide_descr}>Побутовою технікою</h3>
          </li>
          <li className={css.provide_item}>
            <BurnerOver />
            <h3 className={css.provide_descr}>Дверима</h3>
          </li>
          <li className={css.provide_item}>
            <BurnerOver />
            <h3 className={css.provide_descr}>Проектуванням</h3>
          </li>
          <li className={css.provide_item}>
            <BurnerOver />
            <h3 className={css.provide_descr}>Стіновими панелями</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}
