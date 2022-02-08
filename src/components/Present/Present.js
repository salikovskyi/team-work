import css from "./Present.module.css";
import picture from "../../images/gived/give-1.png";
import picture2 from "../../images/gived/give-2.png";

export default function Present() {
  return (
    <div className={` section ${css.present_section}`}>
      <div className={`container ${css.present_border}`}>
        <div className={css.present_present}>
          <img src={picture} alt="" />
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={css.present_left_svg}
          >
            <path
              d="M3.375 2.8125C3.375 2.06658 3.67132 1.35121 4.19876 0.823762C4.72621 0.296316 5.44158 0 6.1875 0C6.93342 0 7.64879 0.296316 8.17624 0.823762C8.70368 1.35121 9 2.06658 9 2.8125C9 2.06658 9.29632 1.35121 9.82376 0.823762C10.3512 0.296316 11.0666 0 11.8125 0C12.5584 0 13.2738 0.296316 13.8012 0.823762C14.3287 1.35121 14.625 2.06658 14.625 2.8125V2.81925C14.625 2.898 14.625 3.123 14.5822 3.375H16.875C17.1734 3.375 17.4595 3.49353 17.6705 3.7045C17.8815 3.91548 18 4.20163 18 4.5V5.625C18 5.92337 17.8815 6.20952 17.6705 6.4205C17.4595 6.63147 17.1734 6.75 16.875 6.75H1.125C0.826631 6.75 0.540483 6.63147 0.329505 6.4205C0.118526 6.20952 0 5.92337 0 5.625V4.5C0 4.20163 0.118526 3.91548 0.329505 3.7045C0.540483 3.49353 0.826631 3.375 1.125 3.375H3.41775C3.38804 3.19127 3.37374 3.00537 3.375 2.81925V2.8125ZM4.5765 3.375H7.875V2.8125C7.875 2.59089 7.83135 2.37146 7.74655 2.16672C7.66174 1.96198 7.53744 1.77596 7.38074 1.61926C7.22404 1.46256 7.03802 1.33826 6.83328 1.25345C6.62854 1.16865 6.40911 1.125 6.1875 1.125C5.96589 1.125 5.74646 1.16865 5.54172 1.25345C5.33698 1.33826 5.15096 1.46256 4.99426 1.61926C4.83756 1.77596 4.71326 1.96198 4.62845 2.16672C4.54365 2.37146 4.5 2.59089 4.5 2.8125C4.5 2.90812 4.50225 3.12075 4.55062 3.29625C4.55738 3.32308 4.56603 3.34939 4.5765 3.375ZM10.125 3.375H13.4235C13.4338 3.34935 13.4425 3.32304 13.4494 3.29625C13.4978 3.12075 13.5 2.90812 13.5 2.8125C13.5 2.36495 13.3222 1.93572 13.0057 1.61926C12.6893 1.30279 12.2601 1.125 11.8125 1.125C11.3649 1.125 10.9357 1.30279 10.6193 1.61926C10.3028 1.93572 10.125 2.36495 10.125 2.8125V3.375ZM16.875 7.875V16.3125C16.875 16.7601 16.6972 17.1893 16.3807 17.5057C16.0643 17.8222 15.6351 18 15.1875 18H10.125V7.875H16.875ZM2.8125 18C2.36495 18 1.93572 17.8222 1.61926 17.5057C1.30279 17.1893 1.125 16.7601 1.125 16.3125V7.875H7.875V18H2.8125Z"
              fill="#3D4A39"
            />
          </svg>
          <p className={css.present_subtitle}>Подарунок</p>
        </div>
        <div>
          <h2 className={css.present_title}>Рінго роздає подарунки!</h2>
          <p className={css.present_descr}>
            При замовленні до нового року, отримай цінний подарунок для свого
            комфорту
          </p>
          <button className={`button ${css.present_button}`}>
            Хочу подарунок
          </button>
        </div>
        <div className={`${css.present_border}`}>
          <div className={css.present_present}>
            <img src={picture2} alt="" />
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={css.present_right_svg}
            >
              <path
                d="M3.375 2.8125C3.375 2.06658 3.67132 1.35121 4.19876 0.823762C4.72621 0.296316 5.44158 0 6.1875 0C6.93342 0 7.64879 0.296316 8.17624 0.823762C8.70368 1.35121 9 2.06658 9 2.8125C9 2.06658 9.29632 1.35121 9.82376 0.823762C10.3512 0.296316 11.0666 0 11.8125 0C12.5584 0 13.2738 0.296316 13.8012 0.823762C14.3287 1.35121 14.625 2.06658 14.625 2.8125V2.81925C14.625 2.898 14.625 3.123 14.5822 3.375H16.875C17.1734 3.375 17.4595 3.49353 17.6705 3.7045C17.8815 3.91548 18 4.20163 18 4.5V5.625C18 5.92337 17.8815 6.20952 17.6705 6.4205C17.4595 6.63147 17.1734 6.75 16.875 6.75H1.125C0.826631 6.75 0.540483 6.63147 0.329505 6.4205C0.118526 6.20952 0 5.92337 0 5.625V4.5C0 4.20163 0.118526 3.91548 0.329505 3.7045C0.540483 3.49353 0.826631 3.375 1.125 3.375H3.41775C3.38804 3.19127 3.37374 3.00537 3.375 2.81925V2.8125ZM4.5765 3.375H7.875V2.8125C7.875 2.59089 7.83135 2.37146 7.74655 2.16672C7.66174 1.96198 7.53744 1.77596 7.38074 1.61926C7.22404 1.46256 7.03802 1.33826 6.83328 1.25345C6.62854 1.16865 6.40911 1.125 6.1875 1.125C5.96589 1.125 5.74646 1.16865 5.54172 1.25345C5.33698 1.33826 5.15096 1.46256 4.99426 1.61926C4.83756 1.77596 4.71326 1.96198 4.62845 2.16672C4.54365 2.37146 4.5 2.59089 4.5 2.8125C4.5 2.90812 4.50225 3.12075 4.55062 3.29625C4.55738 3.32308 4.56603 3.34939 4.5765 3.375ZM10.125 3.375H13.4235C13.4338 3.34935 13.4425 3.32304 13.4494 3.29625C13.4978 3.12075 13.5 2.90812 13.5 2.8125C13.5 2.36495 13.3222 1.93572 13.0057 1.61926C12.6893 1.30279 12.2601 1.125 11.8125 1.125C11.3649 1.125 10.9357 1.30279 10.6193 1.61926C10.3028 1.93572 10.125 2.36495 10.125 2.8125V3.375ZM16.875 7.875V16.3125C16.875 16.7601 16.6972 17.1893 16.3807 17.5057C16.0643 17.8222 15.6351 18 15.1875 18H10.125V7.875H16.875ZM2.8125 18C2.36495 18 1.93572 17.8222 1.61926 17.5057C1.30279 17.1893 1.125 16.7601 1.125 16.3125V7.875H7.875V18H2.8125Z"
                fill="#3D4A39"
              />
            </svg>
            <p className={css.present_subtitle}>Подарунок</p>
          </div>
        </div>
      </div>
    </div>
  );
}
