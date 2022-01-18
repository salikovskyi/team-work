import css from "./Discuss.module.css";
import picture from "../../images/people/people-mobile.jpg";
import picture2x from '../../images/people/people-mobile2x.jpg'
import picture_desctop from '../../images/people/people-desctop.jpg'
import picture_desctop2x from '../../images/people/people-desctop2x.jpg'
import picture_tablet from '../../images/people/people-tablet.jpg'
import picture_tablet2x from '../../images/people/people-tablet2x.jpg'

export default function Discuss() {
  return (
    <div className={`${css.discuss_section} ${css.discuss_wrap}`}>
      <div className='container'>
        <div className={css.discuss_text}>
          <h2 className={css.discuss_title}>Обговоримо ваш проект?</h2>
          <p className={css.discuss_descr}>
            Заповніть форму і найближчим часом ми зв'яжемося з вами!
          </p>
          <form action="">
            <label className={css.discuss_label}>
              <input type="text" placeholder="Ім'я" className={css.discuss_input}/>
            </label>
            <label className={css.discuss_label}>
              <input type="text" placeholder="Номер телефону" className={css.discuss_input} />
            </label>
            <div className={css.discuss_attach}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0313 4.78125C16.125 4.875 16.2188 4.99554 16.3125 5.14286H11.5714V0.401786C11.7188 0.495536 11.8393 0.589286 11.933 0.683036L16.0313 4.78125ZM11.25 6.42857H16.7143V17.0357C16.7143 17.3036 16.6205 17.5312 16.433 17.7188C16.2455 17.9062 16.0179 18 15.75 18H2.25001C1.98215 18 1.75447 17.9062 1.56697 17.7188C1.37947 17.5312 1.28572 17.3036 1.28572 17.0357V0.964286C1.28572 0.696429 1.37947 0.46875 1.56697 0.28125C1.75447 0.09375 1.98215 0 2.25001 0H10.2857V5.46429C10.2857 5.73214 10.3795 5.95982 10.567 6.14732C10.7545 6.33482 10.9821 6.42857 11.25 6.42857ZM12.8571 13.8214V13.1786C12.8571 13.0848 12.827 13.0078 12.7667 12.9475C12.7065 12.8873 12.6295 12.8571 12.5357 12.8571H5.46429C5.37054 12.8571 5.29353 12.8873 5.23327 12.9475C5.173 13.0078 5.14286 13.0848 5.14286 13.1786V13.8214C5.14286 13.9152 5.173 13.9922 5.23327 14.0525C5.29353 14.1127 5.37054 14.1429 5.46429 14.1429H12.5357C12.6295 14.1429 12.7065 14.1127 12.7667 14.0525C12.827 13.9922 12.8571 13.9152 12.8571 13.8214ZM12.8571 11.25V10.6071C12.8571 10.5134 12.827 10.4364 12.7667 10.3761C12.7065 10.3158 12.6295 10.2857 12.5357 10.2857H5.46429C5.37054 10.2857 5.29353 10.3158 5.23327 10.3761C5.173 10.4364 5.14286 10.5134 5.14286 10.6071V11.25C5.14286 11.3438 5.173 11.4208 5.23327 11.481C5.29353 11.5413 5.37054 11.5714 5.46429 11.5714H12.5357C12.6295 11.5714 12.7065 11.5413 12.7667 11.481C12.827 11.4208 12.8571 11.3438 12.8571 11.25ZM12.8571 8.67857V8.03571C12.8571 7.94196 12.827 7.86496 12.7667 7.80469C12.7065 7.74442 12.6295 7.71429 12.5357 7.71429H5.46429C5.37054 7.71429 5.29353 7.74442 5.23327 7.80469C5.173 7.86496 5.14286 7.94196 5.14286 8.03571V8.67857C5.14286 8.77232 5.173 8.84933 5.23327 8.9096C5.29353 8.96987 5.37054 9 5.46429 9H12.5357C12.6295 9 12.7065 8.96987 12.7667 8.9096C12.827 8.84933 12.8571 8.77232 12.8571 8.67857Z"
                  fill="white"
                />
              </svg>

              <p className={css.discuss_attach_el}>Прикріпити проект</p>
            </div>
            <button className={`button ${css.discuss_button}`}>Відправити</button>
            <label className={`form-control ${css.checkbox_label}`}>
              <input type="checkbox" name="checkbox-checked" />
              <span className={css.discuss_checkbox_text}>
                Даю згоду на оброблення персональних даних
              </span>
            </label>
          </form>
        </div>
      </div>
      <div className={css.discuss_photo_div}>
      <picture className={css.discuss_photo}>
              <source
                srcset={`${picture_desctop} 1x, ${picture_desctop2x} 2x`}
                media="(min-width: 1200px)"
              />
              <source
                srcset={`${picture_tablet} 1x, ${picture_tablet2x} 2x`}
                media="(min-width: 600px)"
              />
              <img
                className={css.discuss_image}
                src="#"
                srcset={`${picture} 1x, ${picture2x} 2x`}
                alt="pop"
              />
            </picture>
            </div>
    </div>
    
  );
}
