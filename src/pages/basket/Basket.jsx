import React, { useRef } from "react";
import styles from "./basket.module.scss";
import photo from "../../assets/images/IMG_8088.jpg";

function Basket() {
  const [boots, setBoots] = React.useState([]);
  const [price, setPrice] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const orderRed = useRef(null);

  const orderHandle = () => {
    orderRed.current.style.opacity = "100%";
  };
  React.useEffect(() => {
    const data = localStorage.getItem("data");
    const cross = JSON.parse(data);
    setBoots(cross);
  }, []);
  console.log(boots);

  const closeModal = () => {
    orderRed.current.style.opacity = "0";
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.img}>
          <ul>
            {boots.map((el) => (
              <li>
                {el.title}
                <div>
                  <span>Цена:</span>
                  {el.price}
                </div>
                <div className={styles.btn}>
                  <button>-</button>
                  <p>{count}</p>
                  <button>+</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.order}>
          <div className={styles.adress}>
            Введите адрес доставки:
            <div className={styles.input}>
              <input type="text" />
            </div>
          </div>
          <div className={styles.info}>
            <p className={styles.item}>Товары,0 шт.</p>
            <p className={styles.itog}>
              <span>Итого:</span>
              <span>{price}₽</span>
            </p>
          </div>

          <div className={styles.btn}>
            <button onClick={orderHandle}>Заказать</button>
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
          <ul>
            <li>Москва 1 день</li>
            <li>Киров 1день </li>
            <li>Екатеринбург 1день</li>
            <li>Новосибирск 14 часов</li>
            <li>Красноярск 21 час </li>

            <li>Иркутск 7 часов </li>
            <li> Улан-Удэ</li>
          </ul>
          <p>
            {" "}
            Пункт выдачи товара:Жердева, 44В ул. Гагарина, 60 Октябрьская ул.,
            15,
          </p>
        </div>
      </div>
      <div ref={orderRed} className={styles.ordered}>
        Товар придет через 7 дней
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
          onClick={closeModal}
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

export default Basket;
