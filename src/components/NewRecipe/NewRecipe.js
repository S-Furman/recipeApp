import React, { useState } from "react";
import Ingredient from "./Ingredient/Ingredient";
import styles from "./NewRecipe.module.css";
import { connect } from "react-redux";
import Button from "../UI/Button/Button";
const NewRecipe = (props) => {
  const [recipe, setRecipe] = useState({
    title: "",
    shortDescription: "",
    difficulty: 0,
  });

  return (
    <div className={styles.form}>
      <form>
        <div className={styles.title}>
          <h1>ADD NEW</h1>
        </div>
        <input placeholder="Title" className={styles.input} type="text" />
        <input
          placeholder="Description"
          className={styles.input}
          type="text"
          name="description"
        />
        {props.ingredients.map((p) => {
          return <Ingredient key={p.count} id={p.count} />;
        })}

        <Button click={() => props.addIngredient()}>+</Button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: () =>
      dispatch({
        type: "addIngredient",
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRecipe);
