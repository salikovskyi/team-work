import css from "./Hero.module.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import pictures from "./data";

const SliderWrapper = styled.div`
  background-image: url(${props => props.url});
  padding-top: 70px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 15px;
  min-height: 500px;
  transition: all 0.7s;
`;

const Button = styled.button`
  background-color: ${(props) => {
    return props.color;
  }};
  color: ${(props) => {
    return props.text_color;
  }};
  position: relative;
  z-index: 10;
`;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(pictures[0]);
  useEffect(() => {
    let n = 0;
    setInterval(() => {
      if (n === pictures.length) {
        n = 0;
      }
      setActiveSlide(pictures[n]);
      n++;
    }, 3000);
  }, []);

  const { image, title, descr, color, text_color } = activeSlide;
  return (
    <div className={css.hero}>
      <SliderWrapper url={image} className={css.hero_section} id="div">
        <div className="container">
          <h1 className={css.hero_title}>{title}</h1>
          <p className={css.hero_descr}>{descr}</p>
          <Button
            color={color}
            text_color={text_color}
            className={`button ${css.hero_button_btn}`}
          >
            Обговорити проект
          </Button>
          <hr className={css.hero_button_underline}></hr>
          <div className={css.hero_slider}>
            {/* <ul className={css.hero_arrow_list}>
              <li className={css.hero_arrow_item}>
                <a href="#" className={css.hero_arrow_link}>
                  <LeftArrow />
                </a>
              </li>
              <li className={css.hero_arrow_item}>
                <a href="#" className={css.hero_arrow_link}>
                  <RightArrow />
                </a>
              </li>
            </ul> */}

            <div className={css.hero_slide_number_section}>
              {pictures.map((picture) => (
                <button
                  key={picture.id}
                  className={css.hero_slide_number}
                  onClick={() => setActiveSlide(picture)}
                >
                  {picture.id}
                </button>
              ))}
            </div>
          </div>
        </div>
      </SliderWrapper>
    </div>
  );
}
