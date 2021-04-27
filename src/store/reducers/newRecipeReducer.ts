import { configureStore, createSlice } from "@reduxjs/toolkit";

interface Ingredient {
  count: number;
  nameOfIngredient: string;
}

interface IngredientsArray {
  ingredients: Ingredient[];
}

const initialState = {
  ingredients: [
    {
      count: 0,
      nameOfIngredient: "",
    },
  ],
} as IngredientsArray;

const newRecipeSlice = createSlice({
  name: "newRecipe",
  initialState,
  reducers: {
    updateIngredient: (state, action) => {
      const index = state.ingredients.findIndex(
        (element) => element.count === action.payload.id
      );
      state.ingredients[index].nameOfIngredient = action.payload.event;
    },
    deleteIngredient: (state, action) => {
      const index = state.ingredients.findIndex(
        (element) => element.count === action.payload
      );
      state.ingredients.splice(index, 1);
    },
    addIngredient: (state) => {
      if (state.ingredients[0]) {
        state.ingredients.push({
          count: state.ingredients[state.ingredients.length - 1].count + 1,
          nameOfIngredient: "",
        });
      } else {
        state.ingredients.push({
          count: 0,
          nameOfIngredient: "",
        });
      }
    },
  },
});

const store = configureStore({ reducer: newRecipeSlice.reducer });
export const {
  addIngredient,
  deleteIngredient,
  updateIngredient,
} = newRecipeSlice.actions;
export default store;
