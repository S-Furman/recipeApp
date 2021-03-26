import React from "react";
import styles from "./Recipe.module.css";
import Food from "../../../assets/food.jpg";
import StarRating from "../StarRating/StarRating";
const Recipe = (props) => {
  console.log(props.difficulty);
  return (
    <div className={styles.Recipe}>
      <p className={styles.DishName}>{props.name}</p>
      <img className={styles.Img} src={Food} />

      <p className={styles.Description}>{props.description}</p>
      <StarRating numberOfStars={props.difficulty} />
    </div>
  );
};

export default Recipe;
