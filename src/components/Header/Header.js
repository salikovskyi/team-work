import css from './Header.module.css'
import logo from '../../images/logo/logo.png'

// const url = url('instagram.com')




export default function Header () {

    return (
        <header className={css.header}>
            <span className={css.header_logo}>
                <img src={logo} alt="logo" className={css.header_logo_img}/>
            </span>

            <nav className={css.header_nav}>
                <ul className={css.header_list}>
                    {/* <li className={css.header_item}>
                        <a href="" className={css.header_link}>
                        Напрямки
                        </a>
                    </li>
                    <li className={css.header_item}>
                        <a href="" className={css.header_link}>
                        Про компанію
                        </a>
                    </li>
                    <li className={css.header_item}>
                        <a href="" className={css.header_link}>
                        Переваги

                        </a>
                    </li>
                    <li className={css.header_item}>
                        <a href="" className={css.header_link}>
                        Етапи роботи
                        </a>
                    </li> */}
                </ul>
            </nav>
        </header>
    )
}