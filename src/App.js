import "./App.css";
import Layout from "./components/Layout/Layout";
import Recipes from "./components/Recipes/Recipes";
import { Switch, Route } from "react-router-dom";
import NewRecipe from "./components/NewRecipe/NewRecipe";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/AddRecipe" exact component={NewRecipe}></Route>
        <Route path="/" component={Recipes}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
