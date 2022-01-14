import css from './Header.module.css'
import logo from '../../images/logo/logo.png'
import burger from '../../images/burger-menu/burger.svg'

const inst = 'https://www.instagram.com/?hl=ru'

// const url = url('instagram.com')




export default function Header () {


    const Burger = () => {
        return (
            <img src={burger} alt="" className={css.burger_icon}/>
            // <svg>
            //     <use>
            //        {burger} 
            //     </use>
            // </svg>
        )
    }

    return (
        <header className={css.header}>
            <span className={css.header_logo}>
                <a href={inst} target="_blank" rel="noreferrer">
                <img src={logo} alt="logo" className={css.header_logo_img}/>
                </a>
            </span>

            <nav className={css.header_nav}>
                <Burger/>
                {/* <ul className={css.header_list}>
                    <li className={css.header_item}>
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
                    </li>
                </ul> */}
            </nav>
        </header>
    )
}