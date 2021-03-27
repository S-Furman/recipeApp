import React, { useState } from "react";
import Ingredient from "./Ingredient/Ingredient";
const NewRecipe = (props) => {
  const [recipe, setRecipe] = useState({
    title: "",
    shortDescription: "",
    difficulty: 0,
    ingredients: [],
    numOfIngredients: 1,
  });

  const addIngredient = () => {
    setRecipe({
      ...recipe,
      numOfIngredients: recipe.numOfIngredients + 1,
    });
  };

  const ingredients = [];

  for (let i = 0; i < recipe.numOfIngredients; i += 1) {
    ingredients.push(<Ingredient key={i} id={i} />);
  }

  return (
    <div>
      <form>
        <label>Title:</label>
        <input type="text" name="title" />
        <label>Short description:</label>
        <input type="text" name="description" />
        {ingredients}
      </form>
      <button onClick={addIngredient}>+</button>
    </div>
  );
};

export default NewRecipe;
