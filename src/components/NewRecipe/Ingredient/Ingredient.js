import React from "react";
import { connect } from "react-redux";

const Ingredient = (props) => {
  return (
    <div>
      <label>ingredient:</label>
      <input
        type="text"
        name="igredient"
        onChange={(event) =>
          props.updateIngredient(event.target.value, props.id)
        }
      />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ingredient);
