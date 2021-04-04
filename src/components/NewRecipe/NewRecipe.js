import React, { useState } from "react";
import Ingredient from "./Ingredient/Ingredient";
import styles from "./NewRecipe.module.css";
import { connect } from "react-redux";
import Button from "../UI/Button/Button";
import axios from "../../axios";
import { app } from "../../firebase/config";
const NewRecipe = (props) => {
  const [recipe, setRecipe] = useState({
    title: "",
    shortDescription: "",
    difficulty: 1,
    fileUrl: "",
  });

  const sendData = () => {
    const data = {
      ...recipe,
    };

    axios.post("/newRecipe.json", data);
    console.log("postuje");
  };

  const uploadImg = async (event) => {
    const file = event.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setRecipe({ ...recipe, fileUrl: await fileRef.getDownloadURL() });
  };

  return (
    <div className={styles.form}>
      <form>
        <div className={styles.title}>
          <h1>ADD NEW</h1>
        </div>
        <input
          onChange={(event) =>
            setRecipe({ ...recipe, title: event.target.value })
          }
          placeholder="Title"
          className={styles.input}
          type="text"
        />
        <input
          onChange={(event) =>
            setRecipe({ ...recipe, shortDescription: event.target.value })
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

      <Button btnType="sendDataButton" click={() => sendData()}>
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
