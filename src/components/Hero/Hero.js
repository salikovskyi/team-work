import css from "./Hero.module.css";
import RightArrow from "../svg/RightArrow/RIghtArrow";
import LeftArrow from "../svg/LeftArrow/LeftArrow";
import Backhround from "../../images/project/project1.jpg";
import { useRef } from "react";

export default function Hero() {
  const slide = useRef();

  const onClick = (e) => {
    e.preventDefault();
    slide.current.style.backgroundImage = ` linear-gradient(180deg, rgba(0, 0, 0, 0.2) -13.19%,
    rgba(0, 0, 0, 0.85) 94.01% ),url(https://picsum.photos/200/300)`;
  };

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

  console.log(slide);
  return (
    <div className={css.hero_section} id="div" ref={slide}>
      <div className="container">
        <h1 className={css.hero_title}>виробництво меблів</h1>
        <p className={css.hero_descr}>
          Ми виконуємо комплексне виготовлення корпусних меблів для житлових і
          комерційних приміщень, забезпечимо Вас якісним меблевим продуктом
          власного виробництва.
        </p>
        <button className="button">Обговорити проект</button>
        <hr className={css.hero_button_underline}></hr>
        <div className={css.hero_slider}>
          <ul className={css.hero_arrow_list}>
            <li className={css.hero_arrow_item} onClick={onClick}>
              <a href="#" className={css.hero_arrow_link}>
                <LeftArrow />
              </a>
            </li>
            <li className={css.hero_arrow_item} onClick={onClick}>
              <a href="#" className={css.hero_arrow_link}>
                <RightArrow />
              </a>
            </li>
          </ul>

          <div className={css.hero_slide_number_section}>
            <button className={css.hero_slide_number}>1</button>
            <button className={css.hero_slide_number}>2</button>
            <button className={css.hero_slide_number}>3</button>
          </div>
        </div>
      </div>
    </div>
  );
}
