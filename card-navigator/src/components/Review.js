import styles from "./Review.module.css";
import data from "../data";
import { FaUmbrellaBeach } from "react-icons/fa";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { useState } from "react";

const Review = () => {
  const [index, setIndex] = useState(0);

  const checkIndexOverflow = (num) => {
    if (num > data.length - 1) {
      return 0;
    } else if (num < 0) {
      return data.length - 1;
    } else {
      return num;
    }
  };

  const prevCard = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndexOverflow(newIndex);
    });
  };

  const nextCard = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndexOverflow(newIndex);
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.name}>{data[index].name}</div>
      <FaUmbrellaBeach className={styles.icon} />
      <img src={data[index].img} />
      <p>{data[index].description}</p>
      <div>
        <button onClick={prevCard}>
          <BsChevronDoubleLeft />
        </button>
        <button onClick={nextCard}>
          <BsChevronDoubleRight />
        </button>
      </div>
    </div>
  );
};

export default Review;
