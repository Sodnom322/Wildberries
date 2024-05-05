import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

import login from "../../assets/icons/login.png";
import basket from "../../assets/icons/basket.png";

function header() {
  return (
    <div className={styles.header}>
      <div className={styles.info}>
        <ul>
          <li>Москва</li>
          <li>Продавайте на Wildberries</li>
          <li>Работа в Wildberries</li>
        </ul>
      </div>

      <div className={styles.main}>
        <Link to="/">
          <h1>WILDBERRIES</h1>
        </Link>

        <div className={styles.input}>
          <input placeholder="Найти на Wildberries" type="text" />
        </div>
        <div className={styles.links}>
          <div className={styles.link}>
            <img src={login} alt="asd" />
            <Link to="/login">Войти</Link>
          </div>
          <div className={styles.link}>
            <img src={basket} alt="baasadssket" />
            <Link to="/basket">Корзина</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
