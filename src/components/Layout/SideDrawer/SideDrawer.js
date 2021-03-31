import React, { useState } from "react";
import styles from "./SideDrawer.module.css";
import NavItems from "../Navbar/NavItems/NavItems";
const SideDrawer = (props) => {
  let style = "closed";
  if (props.opened) {
    style = "opened";
  }
  console.log(style);
  return (
    <div className={[styles.sideDrawer, styles[style]].join(" ")}>
      <ul className={styles.ul}>
        <NavItems></NavItems>
      </ul>
    </div>
  );
};

export default SideDrawer;
