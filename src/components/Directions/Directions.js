import css from "./Directions.module.css";

export default function Directions() {
  return (
    <div className={css.directions_section}>
      <h2 className={css.directions_title}>Основні напрямки</h2>
      <ul className={css.directions_list}>
        <li className={css.directions_item}>
          <p className={css.directions_number}>01</p>
          <h3 className={css.directions_descr}>Дизайн інтерєру</h3>
        </li>
        <li className={css.directions_item}>
          <p className={css.directions_number}>02</p>
          <h3 className={css.directions_descr}>Виробництво меблів</h3>
        </li>
        <li className={css.directions_item}>
          <p className={css.directions_number}>03</p>
          <h3 className={css.directions_descr}>Комплексне меблювання</h3>
        </li>
      </ul>
    </div>
  );
}
