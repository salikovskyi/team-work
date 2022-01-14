import css from './Header.module.css'
import logo from '../../images/logo/logo.png'
import Facebook from '../svg/Facebook/Facebook'
import Instagram from '../svg/Instagram/Instagram'
import HeroPhone from '../svg/HeroPhone/HeroPhone'
const inst = 'https://www.instagram.com/?hl=ru'





export default function Header () {


    const Burger = () => {
        return (
            <span>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={css.burger_icon}>
            <path d="M4.25 17H29.75" stroke="#282B22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.25 8.5H29.75" stroke="#282B22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.25 25.5H29.75" stroke="#282B22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </span>
            )
        }
        
        return (
        <div className='container'>
        <header className={css.header}>
            
            <span className={css.header_logo}>
                <a href={inst} target="_blank" rel="noreferrer">
                <img src={logo} alt="logo" className={css.header_logo_img}/>
                </a>
            </span>

            <nav className={css.header_nav}>
            
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
            <div className={css.header_auth_nav}>
            <ul className={css.header_social_list}>
                <li className={css.header_social_item}>
                    <Instagram/>
                </li>
                <li className={css.header_social_item}>
                    <Facebook/>
                </li>
            </ul>
            <span className={css.header_phone_icon}><HeroPhone/></span>
            <span className={css.header_number}>+380 67661 5415</span>
                <Burger/>
        </div>
            
           
        </header>
        </div>
        
    )
}