const initialState = {
  ingredients: ["siema"],
};

const newRecipeReducer = (state = initialState, action) => {
  if (action.type === "updateIngredient") {
    const ingredientsCopy = [...state.ingredients];
    ingredientsCopy[action.index] = action.value;

    return {
      ...state,
      ingredients: ingredientsCopy,
    };
  }
  return state;
};

export default newRecipeReducer;
