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
import Size from "../../components/Size/Size";

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
  const [popUp, setPopUp] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/");
    const data = JSON.stringify(cross);
    localStorage.setItem("data", data);
    const data2 = localStorage.getItem("data");
    const parseData = JSON.parse(data2);
    setCrossAll(parseData);
  }, []);

  const handlePopUp = () => {
    setPopUp((prev) => !prev);
  };

  return (
    <div className={styles.home}>
      {crossAll.map((obj) => {
        return <OneItem handlePopUp={handlePopUp} key={obj.id} {...obj} />;
      })}
      {popUp && (
        <div className={styles.size}>
          <div className={styles.divfirst}>
            <h3>Выберите размер</h3>
            <svg
              onClick={handlePopUp}
              class="basket_close__6R201"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="23x"
              height="23px"
            >
              <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
            </svg>

            <p>Таблица размеров</p>
          </div>
          <div className={styles.sizes}>
            <Size size={41} sizeSm={26.5} />
            <Size size={42} sizeSm={27} />
            <Size size={43} sizeSm={27.5} />
            <Size size={44} sizeSm={28} />
            <Size size={45} sizeSm={28.5} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
