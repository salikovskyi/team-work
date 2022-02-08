import css from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={`container ${css.footer_section}`}>
      <div className={`container ${css.footer_wrapper}`}>
        <a href="" className={css.footer_item}>
          © 2021 Ringo
        </a>
        <a href="" className={css.footer_item}>
          Дизайн сайту
        </a>
      </div>
    </div>
  );
}
