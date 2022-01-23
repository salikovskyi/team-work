import css from "./Make.module.css";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import apartament from './data'

export default function Make() {
    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft />
          </div>
        );
      };
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 1000,
    slideToShow: 4,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className={`section ${css.make_section}`}>
        <h2 className={css.title}>Зараз в роботі</h2>
      <Slider {...settings}>
        {apartament.map((flat, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={flat.image} alt={flat} />
            <h3>{flat.descr}</h3>
            <p>{flat.etap}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
