// import styled from "styled-components";
import css from "./HeroModal.module.css";
import logo from "../../images/logo/logo.png";

// const HeroModalWrapper = styled.div`
//   background-color: ${({ active }) => (active ? "red" : "green")};
// `;

// const modalRoot = document.querySelector("#modal-root");

export default function HeroModal({ active }) {
  return (
    <div className={active ? css.hero_modal_active : css.hero_modal }>
        <h2>ASKLAKLSKLKSLKASLKAS</h2>
        <h2>ASKLAKLSKLKSLKASLKAS</h2>
        <h2>ASKLAKLSKLKSLKASLKAS</h2>
        <h2>ASKLAKLSKLKSLKASLKAS</h2>
        <h2>ASKLAKLSKLKSLKASLKAS</h2>
        <h2>ASKLAKLSKLKSLKASLKAS</h2>
        <h2>ASKLAKLSKLKSLKASLKAS</h2>
        <h2>ASKLAKLSKLKSLKASLKAS</h2>
        <h2>ASKLAKLSKLKSLKASLKAS</h2>
        <h2>ASKLAKLSKLKSLKASLKAS</h2>
        <img src={logo} alt="" />
    </div>
  );
}
