import React from "react";
import { NavLink } from "react-router-dom";

import {
  BLOG_LINK,
  MAIN_LINK,
  TESTS_LINK,
  THEORY_LINK,
} from "../../../router/links";

import "./style.scss";

function Footer() {
  const onClickEmail = () => {
    window.location = "mailto:llerlllu@gmail.com";
  };

  return (
    <footer className="footer">
      <div className="footer__body">
        <div className="emailBlock">
          Для связи с администрацией:{" "}
          <span className="emailBlock__email" onClick={onClickEmail}>
            llerlllu@gmail.com
          </span>
        </div>
        <div className="menu">
          <NavLink exact className="menu__elemen" to={MAIN_LINK}>
            Главная
          </NavLink>
          <NavLink exact className="menu__elemen" to={THEORY_LINK}>
            Теория
          </NavLink>
          <NavLink exact className="menu__elemen" to={TESTS_LINK}>
            Тесты
          </NavLink>
          <NavLink exact className="menu__elemen" to={BLOG_LINK}>
            Блог
          </NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
