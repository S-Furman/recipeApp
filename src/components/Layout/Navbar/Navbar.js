import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../../assets/logo.png";
import NavItems from "./NavItems/NavItems";
import menuButton from "../../../assets/menuButton.svg";
const Navbar = (props) => (
  <header className={styles.header}>
    <img className={styles.img} src={Logo} alt="logo" />
    <NavItems view="desktop"></NavItems>
    <img
      onClick={props.sideDrawerButtonHandler}
      className={styles.menuButton}
      src={menuButton}
      alt="menuButton"
    />
  </header>
);

export default Navbar;
