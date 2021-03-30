import React from "react";
import styles from "./Recipe.module.css";
import Food from "../../../assets/food.jpg";
import StarRating from "../StarRating/StarRating";
const Recipe = (props) => {
  console.log(props.difficulty);
  return (
    <div className={styles.recipe}>
      <p className={styles.DishName}>{props.name}</p>
      <img className={styles.img} src={Food} alt="dish" />
      <div className={styles.insideOfImg}>
        <StarRating numberOfStars={props.difficulty} />
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
};

export default Recipe;
