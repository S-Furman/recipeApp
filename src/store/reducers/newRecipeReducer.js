const initialState = {
  ingredients: [
    {
      count: 0,
      nameOfIngredient: "sth",
    },
  ],
};

const newRecipeReducer = (state = initialState, action) => {
  const ingredientsCopy = [...state.ingredients];
  if (action.type === "updateIngredient") {
    ingredientsCopy[action.index].nameOfIngredient = action.value;

    return {
      ...state,
      ingredients: ingredientsCopy,
    };
  }
  if (action.type === "deleteIngredient") {
    const ingredientsCopy = [...state.ingredients];
    ingredientsCopy.splice(action.index, 1);
    return {
      ...state,
      ingredients: ingredientsCopy,
    };
  }

  if (action.type === "addIngredient") {
    ingredientsCopy.push({
      count: state.ingredients[state.ingredients.length - 1].count + 1,
      nameOfIngredient: "",
    });
    return {
      ...state,
      ingredients: ingredientsCopy,
    };
  }
  return state;
};

export default newRecipeReducer;
