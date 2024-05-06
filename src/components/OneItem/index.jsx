import React, { useRef } from "react";
import styles from "./OneItem.module.scss";
import { Link } from "react-router-dom";
import Size from "../Size/Size";

function OneItem({ title, price, photo, id, handlePopUp }) {
  const arr = [];
  React.useEffect(() => {
    arr.push(id);
  }, []);
  console.log(arr);

  return (
    <>
      <div className={styles.container}>
        <Link to={`/${id}`}>
          <div className={styles.img}>
            {" "}
            <img src={photo} alt="12" />
          </div>
        </Link>
        <p>
          {price} RUB <br />
        </p>
        <hr />
        <h5>{title} </h5>
        <div className={styles.btn}>
          <button onClick={handlePopUp}>Добавить в корзину</button>
        </div>
      </div>
    </>
  );
}

export default OneItem;
