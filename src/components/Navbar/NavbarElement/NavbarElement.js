import React from "react";
import styles from "./NavbarElement.module.css";
import { NavLink } from "react-router-dom";
const NavbarElement = (props) => {
  return (
    <li>
      <NavLink to={props.path}>{props.children} </NavLink>{" "}
    </li>
  );
};

export default NavbarElement;
