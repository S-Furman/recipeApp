import Button from "../../UI/Button/Button";
import styles from "./Ingredient.module.css";
import { useDispatch } from "react-redux";
import {
  deleteIngredient,
  updateIngredient,
} from "../../../store/reducers/newRecipeReducer";
const Ingredient = (props) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.ingredient}>
      <input
        className={styles.input}
        placeholder="Ingriedent"
        type="text"
        onChange={(event) =>
          dispatch(
            updateIngredient({
              event: event.target.value,
              id: props.id,
            })
          )
        }
      />
      <Button
        btnType="deleteButton"
        click={() => dispatch(deleteIngredient(props.id))}
      >
        -
      </Button>
      {/* <label>Ammount:</label>
      <input type="number" name="ammount" /> */}
    </div>
  );
};

export default Ingredient;
