import axios from "axios";

const instance = axios.create({
  baseURL: "https://recipeappbyme-default-rtdb.firebaseio.com",
});

export default instance;
