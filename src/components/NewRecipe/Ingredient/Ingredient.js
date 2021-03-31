import React from "react";
import { connect } from "react-redux";
import Button from "../../UI/Button/Button";
import styles from "./Ingredient.module.css";
import inputStyles from "../NewRecipe.module.css";
const Ingredient = (props) => {
  return (
    <div className={styles.ingredient}>
      <input
        className={styles.input}
        placeholder="ingriedent"
        type="text"
        name="igredient"
        onChange={(event) =>
          props.updateIngredient(event.target.value, props.id)
        }
      />
      <Button
        btnType="deleteButton"
        click={() => props.deleteIngredient(props.id)}
      >
        -
      </Button>
      {/* <label>Ammount:</label>
      <input type="number" name="ammount" /> */}
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
    updateIngredient: (value, index) =>
      dispatch({
        type: "updateIngredient",
        value: value,
        index: index,
      }),
    deleteIngredient: (index) =>
      dispatch({
        type: "deleteIngredient",
        index: index,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ingredient);
