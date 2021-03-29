import React, { useState } from "react";
import Ingredient from "./Ingredient/Ingredient";
import styles from "./NewRecipe.module.css";
import { connect } from "react-redux";
const NewRecipe = (props) => {
  const [recipe, setRecipe] = useState({
    title: "",
    shortDescription: "",
    difficulty: 0,
  });

  return (
    <div>
      <form className={styles.Form}>
        <label>Title:</label>
        <input type="text" name="title" />
        <label>Short description:</label>
        <input type="text" name="description" />
        {props.ingredients.map((p) => {
          return <Ingredient key={p.count} id={p.count} />;
        })}
      </form>
      <button onClick={() => props.addIngredient()}>+</button>
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
