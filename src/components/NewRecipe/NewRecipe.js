import React, { useState } from "react";
import Ingredient from "./Ingredient/Ingredient";
import styles from "./NewRecipe.module.css";
import { connect } from "react-redux";
import Button from "../UI/Button/Button";
import axios from "../../axios";
import { app } from "../../firebase/config";
const NewRecipe = (props) => {
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    shortDescription: "",
    difficulty: 1,
    fileUrl: "",
    uploadable: false,
  });

  const sendData = () => {
    const data = {
      title: newRecipe.title,
      shortDescription: newRecipe.shortDescription,
      difficulty: newRecipe.difficulty,
      fileUrl: newRecipe.fileUrl,
    };

    axios.post("/newRecipe.json", data);
    console.log("postuje");
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
  return (
    <div className={styles.form}>
      <form>
        <div className={styles.title}>
          <h1>ADD NEW</h1>
        </div>
        <input
          onChange={(event) =>
            setNewRecipe({ ...newRecipe, title: event.target.value })
          }
          placeholder="Title"
          className={styles.input}
          type="text"
        />
        <input
          onChange={(event) =>
            setNewRecipe({ ...newRecipe, shortDescription: event.target.value })
          }
          placeholder="Description"
          className={styles.input}
          type="text"
          name="description"
        />

        {props.ingredients.map((p) => {
          return <Ingredient key={p.count} id={p.count} />;
        })}

        <Button
          btnType="newIngredientButton"
          click={() => props.addIngredient()}
        >
          ADD NEW INGREDIENT
        </Button>
      </form>
      <input type="file" onChange={uploadImg} />

      <Button
        btnType="sendDataButton"
        disabled={!newRecipe.uploadable}
        click={() => sendData()}
      >
        SEND DATA
      </Button>
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
    addIngredient: () =>
      dispatch({
        type: "addIngredient",
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRecipe);
