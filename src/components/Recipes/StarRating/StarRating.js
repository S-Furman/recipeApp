import React from "react";
import Star from "../../../assets/star.svg";
import styles from "./StarRating.module.css";
const StarRating = (props) => {
  switch (props.numberOfStars) {
    case 1: {
      return (
        <div>
          <div className={styles.firstStar}>
            <img className={styles.star} src={Star} alt="star" />;
          </div>
        </div>
      );
    }
    case 2: {
      return (
        <div>
          <div className={styles.firstStar}>
            <img className={styles.star} src={Star} alt="star" />
            <div className={styles.secondStar}>
              <img className={styles.star} src={Star} alt="star" />
            </div>
          </div>
        </div>
      );
    }
    case 3: {
      return (
        <div>
          <div className={styles.firstStar}>
            <img className={styles.star} src={Star} alt="star" />
            <div className={styles.secondStar}>
              <img className={styles.star} src={Star} alt="star" />
              <div className={styles.thirdStar}>
                <img className={styles.star} src={Star} alt="star" />
              </div>
            </div>
          </div>
        </div>
      );
    }
    default:
      break;
  }
};

export default StarRating;
