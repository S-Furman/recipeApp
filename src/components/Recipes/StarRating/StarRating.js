import React from "react";
import Star from "../../../assets/star.svg";
import styles from "./StarRating.module.css";
const StarRating = (props) => {
  switch (props.numberOfStars) {
    case 1: {
      return <img className={styles.Img} src={Star} alt="star" />;
    }
    case 2: {
      return (
        <div>
          <img className={styles.Img} src={Star} alt="star" />
          <img className={styles.Img} src={Star} alt="star" />
        </div>
      );
    }
    case 3: {
      return (
        <div>
          <img className={styles.Img} src={Star} alt="star" />
          <img className={styles.Img} src={Star} alt="star" />
          <img className={styles.Img} src={Star} alt="star" />
        </div>
      );
    }
    default:
      break;
  }
};

export default StarRating;
