import css from "./Hero.module.css";
import RightArrow from "../svg/RightArrow/RIghtArrow";
import LeftArrow from "../svg/LeftArrow/LeftArrow";
import { useEffect, useRef, useState } from "react";
import styled from 'styled-components'
import pictures from './data'
const SliderWrapper = styled.div`
  background-image: url(${props => { 
    console.log(props);
    return props.url}});
  padding-top: 70px;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 15px;
  background-size: cover;
  background-repeat: no-repeat;
`

export default function Hero() {
  const slide = useRef();
  const [activeSlide, setActiveSlide] = useState(pictures[0])
  
  const {image, title, descr} = activeSlide;
  return (
  
    <SliderWrapper url={image} className={css.hero_section} id="div" ref={slide}>
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
            {
              pictures.map((picture) => 
                <button key={picture.id} className={css.hero_slide_number} onClick={() => setActiveSlide(picture)}>{picture.id}</button>
                
                )
            }
            
          </div>
        </div>
      </div>
    </SliderWrapper>
    
  );
}
