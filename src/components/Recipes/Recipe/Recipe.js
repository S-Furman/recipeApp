import styles from "./Recipe.module.css";

import StarRating from "../StarRating/StarRating";

const Recipe = (props) => (
  <article className={styles.recipe}>
    <header className={styles.DishName}>{props.name}</header>
    <img className={styles.img} src={props.fileUrl} alt="dish" />
    <div className={styles.imgContent}>
      <StarRating numberOfStars={props.difficulty} />
      <p className={styles.description}>{props.description}</p>
    </div>
  </article>
);

export default Recipe;
