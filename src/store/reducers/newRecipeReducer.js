const initialState = {
  ingredients: [
    {
      count: 0,
      nameOfIngredient: "sth",
    },
  ],
};

const newRecipeReducer = (state = initialState, action) => {
  if (action.type === "updateIngredient") {
    const ingredientsCopy = [...state.ingredients];
    let indexOfElement;
    for (let i in state.ingredients) {
      if (state.ingredients[i].count === action.index) {
        indexOfElement = i;
      }
    }
    if (action.value !== undefined) {
      ingredientsCopy[indexOfElement].nameOfIngredient = action.value;
    }

    return {
      ...state,
      ingredients: ingredientsCopy,
    };
  }
  if (action.type === "deleteIngredient") {
    const ingredientsCopy = [...state.ingredients];
    let indexOfElement;
    for (let i in state.ingredients) {
      if (state.ingredients[i].count === action.index) {
        indexOfElement = i;
      }
    }
    ingredientsCopy.splice(indexOfElement, 1);
    return {
      ...state,
      ingredients: ingredientsCopy,
    };
  }

  if (action.type === "addIngredient") {
    const ingredientsCopy = [...state.ingredients];
    if (state.ingredients[0]) {
      ingredientsCopy.push({
        count: state.ingredients[state.ingredients.length - 1].count + 1,
        nameOfIngredient: "",
      });
    } else {
      ingredientsCopy.push({
        count: 0,
        nameOfIngredient: "",
      });
    }

    return {
      ...state,
      ingredients: ingredientsCopy,
    };
  }
  return state;
};

export default newRecipeReducer;
