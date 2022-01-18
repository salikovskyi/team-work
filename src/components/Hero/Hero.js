import css from "./Hero.module.css";
import RightArrow from "../svg/RightArrow/RIghtArrow";
import LeftArrow from "../svg/LeftArrow/LeftArrow";
// import Backhround from "../../images/project/project1.jpg";
import picture from '../../images/hero/hero-mobile/hero-mobile.jpg'
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const slide = useRef();

  const [title, setTitle] = useState("ВИРОБНИЦТВО МЕБЛІВ");
  const [descr, setDescr]= useState('Ми виконуємо комплексне виготовлення корпусних меблів для житлових ікомерційних приміщень, забезпечимо Вас якісним меблевим продуктомвласного виробництва.')


  const firstButton = (e) => {
    e.preventDefault();
    slide.current.style.backgroundImage = ` linear-gradient(180deg, rgba(0, 0, 0, 0.2) -13.19%,
    rgba(0, 0, 0, 0.85) 94.01% ),url(${picture})`;
    setTitle('ВИРОБНИЦТВО МЕБЛІВ')
    setDescr('Ми виконуємо комплексне виготовлення корпусних меблів для житлових ікомерційних приміщень, забезпечимо Вас якісним меблевим продуктомвласного виробництва.')
  }

  const secondButton = (e) => {
    e.preventDefault();
    slide.current.style.backgroundImage = ` linear-gradient(180deg, rgba(0, 0, 0, 0.2) -13.19%,
    rgba(0, 0, 0, 0.85) 94.01% ),url(https://picsum.photos/200/300)`;
    setTitle('ХАРАШО СКАЖУТЬ ПЕРЕРОБИ')
    setDescr("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi")
  };

  const thirdButton = (e) => {
    e.preventDefault();
    slide.current.style.backgroundImage = ` linear-gradient(180deg, rgba(0, 0, 0, 0.2) -13.19%,
    rgba(0, 0, 0, 0.85) 94.01% ),url(https://www.closetag.com/images/photo4.jpg)`;
    setTitle('ВРОДІ ВСЬО НОРМ ДАЖЕ ДУЖЕ')
    setDescr("But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the")
  }
  // let sliderImages = document.querySelector("#div"),
  // arrowLeft = document.querySelector("#arrow-left"),
  // arrowRight = document.querySelector("#arrow-right"),
  // current = 0;

  // function reset() {
  //   for (let i = 0; i < sliderImages.length; i++) {
  //     sliderImages[i].style.display = "none";
  //   }
  // }
  // function startSlide() {
  //   reset();
  //   sliderImages[0].style.display = "block";
  // }
  // function slideLeft() {
  //   reset();
  //   sliderImages[current - 1].style.display = "block";
  //   current--;
  // }
  // function slideRight() {
  //   reset();
  //   sliderImages[current + 1].style.display = "block";
  //   current++;
  // }

  // arrowLeft.addEventListener("click", function () {
  //   if (current === 0) {
  //     current = sliderImages.length;
  //   }
  //   slideLeft();
  // });
  // arrowRight.addEventListener("click", function () {
  //   if (current === sliderImages.length - 1) {
  //     current = -1;
  //   }
  //   slideRight();
  // });

  // startSlide();

  // console.log(slide);
  return (
    <div className={css.hero_section} id="div" ref={slide}>
      <div className="container">
        <h1 className={css.hero_title}>{title}</h1>
        <p className={css.hero_descr}>
          {descr}
        </p>
        <button className={`button ${css.hero_button_btn}`}>Обговорити проект</button>
        <hr className={css.hero_button_underline}></hr>
        <div className={css.hero_slider}>
          <ul className={css.hero_arrow_list}>
            <li className={css.hero_arrow_item}>
              <a href="#" className={css.hero_arrow_link}>
                <LeftArrow />
              </a>
            </li>
            <li className={css.hero_arrow_item} >
              <a href="#" className={css.hero_arrow_link}>
                <RightArrow />
              </a>
            </li>
          </ul>

          <div className={css.hero_slide_number_section}>
            <button className={css.hero_slide_number} onClick={firstButton}>1</button>
            <button className={css.hero_slide_number} onClick={secondButton}>2</button>
            <button className={css.hero_slide_number} onClick={thirdButton}>3</button>
          </div>
        </div>
      </div>
    </div>
    
  );
}
