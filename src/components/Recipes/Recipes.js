import { useState, useEffect } from "react";
import axios from "../../axios";

import Recipe from "./Recipe/Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("/newRecipe.json").then((response) => {
      const fetchedData = [];
      for (let key in response.data) {
        fetchedData.push({ ...response.data[key], key: key });
      }
      setRecipes(fetchedData);
    });
  }, []);

  let articles = null;
  if (recipes) {
    articles = recipes.map((recipe, index) => {
      return (
        <Recipe
          key={index}
          name={recipe.title}
          difficulty={recipe.difficulty}
          description={recipe.shortDescription}
          fileUrl={recipe.fileUrl}
        />
      );
    });
  }
  return <>{articles}</>;
};

export default Recipes;
