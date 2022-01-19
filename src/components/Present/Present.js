import css from "./Present.module.css";

export default function Present() {
  return (
    <div className={` section ${css.present_section}`}>
        <div className={`container ${css.present_border}`}>
      <h2 className={css.present_title}>Рінго роздає подарунки!</h2>
      <p className={css.present_descr}>
        При замовленні до нового року, отримай цінний подарунок для свого
        комфорту
      </p>
      <button className={`button ${css.present_button}`}>Хочу подарунок</button>
      </div>
    </div>
  );
}
