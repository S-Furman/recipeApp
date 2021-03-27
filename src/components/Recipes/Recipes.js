import React, { useState } from "react";
import Recipe from "./Recipe/Recipe";
import styles from "./Recipes.module.css";
const Recipes = () => {
  const [Recipes, setRecipes] = useState([
    {
      dishName: "ogorkowa",
      difficulty: 1,
      description: "moja pierwsza ulubiona zupa",
    },
    {
      dishName: "pomidorowa",
      difficulty: 2,
      description: "mojadruga ulbuiona zupa",
    },
    {
      dishName: "pomidorowa",
      difficulty: 2,
      description: "mojadruga ulbuiona zupa",
    },
    {
      dishName: "pomidorowa",
      difficulty: 2,
      description: "mojadruga ulbuiona zupa",
    },
    {
      dishName: "pomidorowa",
      difficulty: 2,
      description: "mojadruga ulbuiona zupa",
    },
  ]);
  console.log(Recipes);
  return (
    <div className={styles.Recipes}>
      {Recipes.map((recipe, index) => {
        return (
          <Recipe
            key={index}
            name={recipe.dishName}
            difficulty={recipe.difficulty}
            description={recipe.description}
          />
        );
      })}
    </div>
  );
};

export default Recipes;
