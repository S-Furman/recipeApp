import React from "react";
import NavbarElement from "./NavbarElement/NavbarElement";
import styles from "./NavItems.module.css";
const NavItems = (props) => (
  <nav>
    <ul className={styles[props.view]}>
      <NavbarElement path="/">Recipes</NavbarElement>
      <NavbarElement path="/AddRecipe">Add New</NavbarElement>
    </ul>
  </nav>
);

export default NavItems;
