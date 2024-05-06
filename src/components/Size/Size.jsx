import React from "react";
import styles from "./size.module.scss";
import { useNavigate } from "react-router-dom";

const Size = ({ size, sizeSm }) => {
  const navigate = useNavigate();
  const redirectToBasket = () => {
    setTimeout(() => {
      navigate("/basket");
    }, 2000);
  };

  return (
    <div onClick={redirectToBasket} className={styles.wrapper}>
      <p className={styles.first}>{size}</p>
      <p className={styles.secondP}>{sizeSm} cm</p>
    </div>
  );
};

export default Size;
