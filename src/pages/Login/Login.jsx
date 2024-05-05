import React from "react";

import styles from "./login.module.scss";
import { redirect, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const loginRef = React.useRef(null);
  const btnRef = React.useRef(null);
  const inputRef = React.useRef(null);

  const login = () => {
    loginRef.current.style.opacity = "100%";
  };
  const loginClose = () => {
    loginRef.current.style.opacity = "0";
  };

  const redirectUs = () => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <label htmlFor="input">Войти или создать профиль</label>
          <div className={styles.input}>
            <input ref={inputRef} type="tel" name="phone" id="input" />
          </div>
          <div className={styles.btn}>
            <button ref={btnRef} onClick={() => redirectUs()}>
              Войти
            </button>
          </div>

          <div className={styles.accept}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z" />
            </svg>
            <p>
              Соглашаюсь с правилами пользования торговой площадкой и возврата
            </p>
          </div>
        </div>
      </div>

      <div ref={loginRef} className={styles.login}>
        Вы успешно авторизировались
        <svg
          className={styles.ok}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="30px"
          height="30px"
        >
          <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z" />
        </svg>
        <svg
          className={styles.close}
          onClick={loginClose}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="23x"
          height="23px"
        >
          <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
        </svg>
      </div>
    </>
  );
}

export default Login;
