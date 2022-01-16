import css from "./Provide.module.css";
import BurnerOver from "../svg/BurnerOver/BurnerOver";
import Door from '../svg/Door/Door'
import Floor from '../svg/Floor/Floor'
import Brainstorm from '../svg/Brainstorm/Brainstorm'
import Furniture from "../svg/Furniture/Furnitire";
import Wardrobe from "../svg/Wardrobe/Wardrobe";

export default function Provide() {
  return (
    <div className={css.provide_section}>
      <div className="container section">
        <h2 className={css.provide_title}>Ми забезпечемо вас </h2>

        <ul className={css.provide_list}>
        <li className={css.provide_item}>
            <Wardrobe />
            <h3 className={css.provide_descr}>Меблями</h3>
          </li>
          <li className={css.provide_item}>
            <Furniture />
            <h3 className={css.provide_descr}>Освітленням</h3>
          </li>
          <li className={css.provide_item}>
            <BurnerOver />
            <h3 className={css.provide_descr}>Побутовою технікою</h3>
          </li>
          <li className={css.provide_item}>
            <Door />
            <h3 className={css.provide_descr}>Дверима</h3>
          </li>
          <li className={css.provide_item}>
            <Brainstorm />
            <h3 className={css.provide_descr}>Проектуванням</h3>
          </li>
          <li className={css.provide_item}>
            <Floor />
            <h3 className={css.provide_descr}>Стіновими панелями</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}
