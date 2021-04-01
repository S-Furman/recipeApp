import React, { useState, useEffect } from "react";
import Recipe from "./Recipe/Recipe";
import styles from "./Recipes.module.css";
import axios from "../../axios";
const Recipes = () => {
  const [Recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("/newRecipe.json").then((response) => {
      const fetchedData = [];
      for (let key in response.data) {
        fetchedData.push({ ...response.data[key], key: key });
      }
      setRecipes(fetchedData);
    });
  }, []);

  let view = <h1>siema</h1>;
  if (Recipes) {
    view = Recipes.map((recipe, index) => {
      return (
        <Recipe
          key={index}
          name={recipe.title}
          difficulty={recipe.difficulty}
          description={recipe.shortDescription}
        />
      );
    });
  }
  return <div className={styles.Recipes}>{view}</div>;
};

export default Recipes;
