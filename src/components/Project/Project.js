import css from "./Project.module.css";

export default function Project() {
  return (
    <div className={css.project_section}>
      <div className="container section">
        <h2 className={css.project_title}>
          Проект Рінго Україна - створений виконувати об`єктні задачі
          комплексного меблювання житлових та комерційних приміщень.{" "}
        </h2>
        <ul className={css.project_list}>
          <li className={css.project_item}>
            <div className={css.project_item_div}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="9" cy="9" r="3" fill="#AE7B3C" />
                <circle cx="9" cy="9" r="8.5" stroke="#AE7B3C" />
              </svg>

              <p className={css.project_item_descr}>
                Наш колектив націлений на результат - вчасно реалізувати проект
                на найвищому рівні. Ми забезпечуємо спокій замовника та
                вирішуємо будь-які задачі
              </p>
            </div>
          </li>
          <li className={css.project_item}>
            <div className={css.project_item_div}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="9" cy="9" r="3" fill="#AE7B3C" />
                <circle cx="9" cy="9" r="8.5" stroke="#AE7B3C" />
              </svg>

              <p className={css.project_item_descr}>
                Рінго найкращий підрядник прораба, дизайнера, проект-менеджера
                або персональний помічник власника бізнесу, квартири чи салону
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
