import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { app } from "../../firebase/config";
import { useHistory } from "react-router-dom";
import axios from "../../axios";
import { addIngredient } from "../../store/reducers/newRecipeReducer";

import styles from "./NewRecipe.module.css";

import Ingredient from "./Ingredient/Ingredient";
import Button from "../UI/Button/Button";

const NewRecipe = (props) => {
  const ingredients = useSelector((state) => state.ingredients);
  const dispatch = useDispatch();

  const [newRecipe, setNewRecipe] = useState({
    difficulty: 1,
    fileUrl: "",
    uploadable: false,
  });

  const history = useHistory();

  const titleRef = useRef();
  const descriptionRef = useRef();

  const sendData = () => {
    const data = {
      title: titleRef.current.value,
      shortDescription: descriptionRef.current.value,
      difficulty: newRecipe.difficulty,
      fileUrl: newRecipe.fileUrl,
    };

    axios.post("/newRecipe.json", data);
    console.log("posted");
    history.push("/");
  };

  const uploadImg = async (event) => {
    const file = event.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);

    await fileRef.put(file);
    setNewRecipe({
      ...newRecipe,
      fileUrl: await fileRef.getDownloadURL(),
      uploadable: true,
    });
  };
  console.log(ingredients);
  return (
    <form className={styles.form}>
      <header className={styles.title}>ADD NEW RECIPE</header>
      <input
        ref={titleRef}
        placeholder="Title"
        className={styles.input}
        type="text"
      />
      <input
        ref={descriptionRef}
        placeholder="Description"
        className={styles.input}
        type="text"
      />

      {ingredients.map((p) => {
        return <Ingredient key={p.count} id={p.count} />;
      })}
      <Button
        btnType="newIngredientButton"
        click={() => dispatch(addIngredient())}
      >
        ADD NEW INGREDIENT
      </Button>
      <input type="file" onChange={uploadImg} />
      <Button
        btnType="sendDataButton"
        disabled={!newRecipe.uploadable}
        click={() => sendData()}
      >
        SEND DATA
      </Button>
    </form>
  );
};

export default NewRecipe;
