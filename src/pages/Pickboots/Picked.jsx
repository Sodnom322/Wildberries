import React from "react";
import { useParams } from "react-router-dom";
import styles from "./picked.module.scss";
import firstPhoto from "../../assets/images/IMG_8089.jpg";
import second from "../../assets/images/IMG_8088.jpg";
import third from "../../assets/images/IMG_8086.JPG";
import four from "../../assets/images/IMG_8082.JPG";
import five from "../../assets/images/IMG_8084.JPG";
import six from "../../assets/images/IMG_8099.JPG";
import seven from "../../assets/images/IMG_8092.JPG";
import eight from "../../assets/images/IMG_8093.JPG";

const cross = [
  {
    id: 1,
    price: "2567",
    title: "New Balance 530",
    photo: firstPhoto,
  },
  {
    id: 2,
    price: "3256",
    title: "Nike Vomero 5",
    photo: second,
  },
  {
    id: 3,
    price: "4567",
    title: "Golden Goose Glitter star",
    photo: third,
  },
  {
    id: 4,
    price: "5200",
    title: "Golden Goose Glitter",
    photo: four,
  },
  {
    id: 5,
    price: "8999",
    title: "Golden Goose Wild star",
    photo: five,
  },
  {
    id: 6,
    price: "3899",
    title: "Vans Old School",
    photo: six,
  },
  {
    id: 7,
    price: "6777",
    title: "New Balance 2002R",
    photo: seven,
  },
  {
    id: 8,
    price: "12250",
    title: "New Balance 1906R",
    photo: eight,
  },
];

function Picked() {
  const [oneCross, setOnceCross] = React.useState();
  const { id } = useParams();
  React.useEffect(() => {
    const filtered = cross.find((obj) => obj.id === +id);
    setOnceCross(filtered);
  }, [id]);
  console.log(oneCross);

  if (!oneCross) {
    return <p>"Loading..."</p>;
  }

  return (
    <div className={styles.container}>
      <div>
        <img src={oneCross.photo} alt="qwe" />
      </div>
      <h1>{oneCross.title}</h1>
    </div>
  );
}

export default Picked;
