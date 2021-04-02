import "./App.css";
import Layout from "./components/Layout/Layout";
import Recipes from "./components/Recipes/Recipes";
import { Switch, Route } from "react-router-dom";
import NewRecipe from "./components/NewRecipe/NewRecipe";
import SignIn from "./components/Auth/SignIn/SignIn";
import { signInWithEmail, signUp } from "./firebase/config";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/AddRecipe" exact component={NewRecipe}></Route>
        <Route
          path="/signIn"
          exact
          render={() => (
            <SignIn formType="Sign In" signingFunction={signInWithEmail} />
          )}
        ></Route>
        <Route
          path="/signUp"
          exact
          render={() => <SignIn formType="Sign Up" signingFunction={signUp} />}
        ></Route>
        <Route path="/" component={Recipes}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
