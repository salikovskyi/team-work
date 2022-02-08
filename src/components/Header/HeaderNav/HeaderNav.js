import css from '../Header.module.css'
import Instagram from '../../svg/Instagram/Instagram'
import Facebook from '../../svg/Facebook/Facebook'

export default function HeaderNav () {
    return (
        <nav className={css.header_nav}>
            
                <ul className={css.header_list}>
                    <li className={css.header_item}>
                        <a href="#" className={css.header_link}>
                        Напрямки
                        </a>
                    </li>
                    <li className={css.header_item}>
                        <a href="#" className={css.header_link}>
                        Про компанію
                        </a>
                    </li>
                    <li className={css.header_item}>
                        <a href="#" className={css.header_link}>
                        Переваги

                        </a>
                    </li>
                    <li className={css.header_item}>
                        <a href="#" className={css.header_link}>
                        Етапи роботи
                        </a>
                    </li>
                </ul>
            </nav>
    )
}