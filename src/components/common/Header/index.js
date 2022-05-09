import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import classNames from "classnames";

import {
  MAIN_LINK,
  THEORY_LINK,
  BLOG_LINK,
  TESTS_LINK,
} from "../../../router/links";
import Logo from "../../../img/Logo.png";

import "./style.scss";

function Header() {
  const history = useHistory();

  const onClickLogo = () => {
    history.push(MAIN_LINK);
  };

  return (
    <header className="header">
      <div className="header__body">
        <img
          src={Logo}
          className="header__logo"
          alt="Logo"
          width="170"
          height="50"
          onClick={onClickLogo}
        />
        <div className="menu">
          <NavLink
            exact
            className={classNames(
              "menu__elemen",
              history?.location?.pathname === MAIN_LINK &&
                "menu__elemen--active"
            )}
            to={MAIN_LINK}
          >
            Главная
          </NavLink>
          <NavLink
            exact
            className={classNames(
              "menu__elemen",
              history?.location?.pathname === THEORY_LINK &&
                "menu__elemen--active"
            )}
            to={THEORY_LINK}
          >
            Теория
          </NavLink>
          <NavLink
            exact
            className={classNames(
              "menu__elemen",
              history?.location?.pathname === TESTS_LINK &&
                "menu__elemen--active"
            )}
            to={TESTS_LINK}
          >
            Тесты
          </NavLink>
          <NavLink
            exact
            className={classNames(
              "menu__elemen",
              history?.location?.pathname === BLOG_LINK &&
                "menu__elemen--active"
            )}
            to={BLOG_LINK}
          >
            Блог
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
