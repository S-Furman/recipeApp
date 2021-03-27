import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../assets/logo3.png";
import NavbarElement from "./NavbarElement/NavbarElement";
const Navbar = () => {
  return (
    <header>
      <img className={styles.Img} src={Logo} />
      <nav>
        <ul>
          <NavbarElement path="/">Recipes</NavbarElement>
          <NavbarElement path="/AddRecipe">Add New</NavbarElement>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
