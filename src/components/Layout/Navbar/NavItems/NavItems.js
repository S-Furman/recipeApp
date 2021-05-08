import { useContext } from "react";
import { AuthContext } from "../../../../store/AuthContext";
import NavbarElement from "./NavbarElement/NavbarElement";

import styles from "./NavItems.module.css";

const NavItems = (props) => {
  const authContext = useContext(AuthContext);

  return (
    <ul className={styles[props.view]}>
      <NavbarElement path="/">Recipes</NavbarElement>
      <NavbarElement path="/AddRecipe">Add New</NavbarElement>
      {!authContext.isLogged && (
        <NavbarElement path="/SignIn">Sign In</NavbarElement>
      )}
      {authContext.isLogged && (
        <NavbarElement
          style={{ border: "1px solid black" }}
          click={authContext.logout}
          path="/"
        >
          Logout
        </NavbarElement>
      )}
    </ul>
  );
};

export default NavItems;
