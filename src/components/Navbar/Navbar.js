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
          <NavbarElement>Recipes</NavbarElement>
          <NavbarElement>Add New</NavbarElement>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
