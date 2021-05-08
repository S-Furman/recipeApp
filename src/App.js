import { Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Recipes from "./components/Recipes/Recipes";
import NewRecipe from "./components/NewRecipe/NewRecipe";
import Login from "./components/Auth/Login/Login";

import "./App.css";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/AddRecipe" exact component={NewRecipe}></Route>
        <Route
          path="/signIn"
          exact
          render={() => <Login formType="Sign In" />}
        ></Route>
        <Route
          path="/signUp"
          exact
          render={() => <Login formType="Sign Up" />}
        ></Route>
        <Route path="*" component={Recipes}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
