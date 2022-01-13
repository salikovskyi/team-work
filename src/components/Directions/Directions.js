import css from "./Directions.module.css";
import photo1 from '../../images/descriptions/descriptions-desc/descritions1-desctop.jpg'
import photo2 from '../../images/descriptions/descriptions-desc/descritions2-desctop.jpg'
import photo3 from '../../images/descriptions/descriptions-desc/descritions3-desctop.jpg'
import photo1_2x from '../../images/descriptions/descriptions-desc/descritions1-desctop2x.jpg'
import photo2_2x from '../../images/descriptions/descriptions-desc/descritions2-desctop2x.jpg'
import photo3_2x from '../../images/descriptions/descriptions-desc/descritions3-desctop2x.jpg'
import photo1_tablet from '../../images/descriptions/descriptions-tablet/descritions1-tablet.jpg'
import photo2_tablet from '../../images/descriptions/descriptions-tablet/descritions2-tablet.jpg'
import photo3_tablet from '../../images/descriptions/descriptions-tablet/descritions3-tablet.jpg'
import photo1_tablet_2x from '../../images/descriptions/descriptions-tablet/descritions1-tablet2x.jpg'
import photo2_tablet_2x from '../../images/descriptions/descriptions-tablet/descritions2-tablet2x.jpg'
import photo3_tablet_2x from '../../images/descriptions/descriptions-tablet/descritions3-tablet2x.jpg'
import photo1_mobile from '../../images/descriptions/descriptions-mobile/descriptions1-mobile.jpg'
import photo2_mobile from '../../images/descriptions/descriptions-mobile/descriptions2-mobile.jpg'
import photo3_mobile from '../../images/descriptions/descriptions-mobile/descriptions3-mobile.jpg'
import photo1_mobile_2x from '../../images/descriptions/descriptions-mobile/descriptions1-mobile2x.jpg'
import photo2_mobile_2x from '../../images/descriptions/descriptions-mobile/descriptions2-mobile2x.jpg'
import photo3_mobile_2x from '../../images/descriptions/descriptions-mobile/descriptions3-mobile2x.jpg'


export default function Directions() {
  return (
    <div className={css.directions_section}>
      <h2 className={css.directions_title}>Основні напрямки</h2>
      <ul className={css.directions_list}>
        <li className={css.directions_item}>
          <p className={css.directions_number}>01</p>
          <h3 className={css.directions_descr}>Дизайн інтерєру</h3>
          <picture>
                <source
                  srcset={`${photo1} 1x, ${photo1_2x} 2x`}
                  media="(min-width: 1200px)"
                />
                <source
                  srcset={`${photo1_tablet} 1x, ${photo1_tablet_2x} 2x`}
                  media="(min-width: 768px)"
                />
                <img className={css.image}
                  src="#"
                  srcset={`${photo1_mobile} 1x, ${photo1_mobile_2x} 2x`}
                  alt="popop"
                />
              </picture>
        </li>
        <li className={css.directions_item}>
          <p className={css.directions_number}>02</p>
          <h3 className={css.directions_descr}>Виробництво меблів</h3>
          <picture>
          <picture>
                <source
                  srcset={`${photo2} 1x, ${photo2_2x} 2x`}
                  media="(min-width: 1200px)"
                />
                <source
                  srcset={`${photo2_tablet} 1x, ${photo2_tablet_2x} 2x`}
                  media="(min-width: 768px)"
                />
                <img className={css.image}
                  src="#"
                  srcset="./images/team/team1-mobile.jpg 1x, ./images/team/team1-mobile2x.jpg 2x"
                  alt="photo"
                />
              </picture>
          </picture>
        </li>
        <li className={css.directions_item}>
          <p className={css.directions_number}>03</p>
          <h3 className={css.directions_descr}>Комплексне меблювання</h3>
          <picture>
          <picture>
                <source
                  srcset={`${photo3} 1x, ${photo3_2x} 2x`}
                  media="(min-width: 1200px)"
                />
                <source
                  srcset={`${photo3_tablet} 1x, ${photo3_tablet_2x} 2x`}
                  media="(min-width: 768px)"
                />
                <img className={css.image}
                  src="#"
                  srcset="./images/team/team1-mobile.jpg 1x, ./images/team/team1-mobile2x.jpg 2x"
                  alt="photo"
                />
              </picture>
          </picture>
        </li>
      </ul>
    </div>
  );
}

