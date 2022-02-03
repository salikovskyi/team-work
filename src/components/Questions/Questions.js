import css from "./Questions.module.css";
import picture from '../../images/questions/woman-mobile.jpg'
import picture2 from '../../images/questions/woman-tablet.jpg'
import picture3 from '../../images/questions/woman-desctop.jpg'

export default function Questions() {
  return (
    <div className={css.questions_section}>
      <div className="container">
        <div className={css.questions_text}>
          <h2 className={css.questions_title}>Залишилися питання?</h2>
          <p className={css.questions_descr}>
            Отримай безкоштовну консультацію менеджера та прорахунок проекту   
          </p>
          <form action="">
              <label className={css.questions_label}>
                  <input type="text" placeholder="Ім'я" className={css.questions_input} />
              </label>
              <label className={css.questions_label}>
                  <input type="text" placeholder="Номер телефону" className={css.questions_input} />
              </label>
              <button className={`button ${css.button}`}> Відправити</button>
              <label className={`form-control ${css.checkbox_label}`}>
                  <input type="checkbox" name="checkbox-checked"/>
                  <span className={css.questions_checkbox_text}>Даю згоду на оброблення персональних даних</span>
              </label>
          </form>
        </div>
      </div>
      <picture className={css.questions_picture}>
          <source srcSet={` ${picture3}`} media="(min-width: 1200px)"/>
          <source srcSet={` ${picture2}`} media="(min-width: 600px)"/>
          <img src={picture} alt="" />
      </picture>
      
    </div>
  );
}
