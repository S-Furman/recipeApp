import React from "react";
import styles from "./NavbarElement.module.css";
const NavbarElement = (props) => {
  return <li>{props.children}</li>;
};

export default NavbarElement;
