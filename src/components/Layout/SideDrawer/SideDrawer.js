import React from "react";
import ReactDOM from "react-dom";

import styles from "./SideDrawer.module.css";

import NavItems from "../Navbar/NavItems/NavItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
  let style = "closed";
  if (props.opened) {
    style = "opened";
  }
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop click={props.click} opened={props.opened} />,
        document.getElementById("backdrop")
      )}
      <nav className={[styles.sideDrawer, styles[style]].join(" ")}>
        <NavItems></NavItems>
      </nav>
    </React.Fragment>
  );
};

export default SideDrawer;
