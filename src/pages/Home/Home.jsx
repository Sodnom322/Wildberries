import React from "react";
import OneItem from "../../components/OneItem";
import styles from "./home.module.scss";
import firstPhoto from "../../assets/images/IMG_8089.jpg";
import second from "../../assets/images/IMG_8088.jpg";
import third from "../../assets/images/IMG_8086.JPG";
import four from "../../assets/images/IMG_8082.JPG";
import five from "../../assets/images/IMG_8084.JPG";
import six from "../../assets/images/IMG_8099.JPG";
import seven from "../../assets/images/IMG_8092.JPG";
import eight from "../../assets/images/IMG_8093.JPG";
import { useNavigate } from "react-router-dom";

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

function Home() {
  const [crossAll, setCrossAll] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/");
    const data = JSON.stringify(cross);
    localStorage.setItem("data", data);
    const data2 = localStorage.getItem("data");
    const parseData = JSON.parse(data2);
    setCrossAll(parseData);
  }, []);

  return (
    <div className={styles.home}>
      {crossAll.map((obj) => {
        return <OneItem key={obj.id} {...obj} />;
      })}
    </div>
  );
}

export default Home;
