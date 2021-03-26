import React from "react";
import Star from "../../../assets/star.svg";
import styles from "./StarRating.module.css";
const StarRating = (props) => {
  switch (props.numberOfStars) {
    case 0: {
      return <div>siema</div>;
    }
    case 1: {
      return <img className={styles.Img} src={Star} />;
    }
    case 2: {
      return (
        <div>
          <img className={styles.Img} src={Star} />
          <img className={styles.Img} src={Star} />
        </div>
      );
    }
    case 3: {
      return (
        <div>
          <img className={styles.Img} src={Star} />
          <img className={styles.Img} src={Star} />
          <img className={styles.Img} src={Star} />
        </div>
      );
    }
  }
};

export default StarRating;
