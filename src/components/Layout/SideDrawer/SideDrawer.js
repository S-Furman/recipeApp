import React from "react";
import styles from "./SideDrawer.module.css";
import NavItems from "../Navbar/NavItems/NavItems";
import Backdrop from "../Backdrop/Backdrop";
const SideDrawer = (props) => {
  let style = "closed";
  if (props.opened) {
    style = "opened";
  }
  return (
    <React.Fragment>
      <Backdrop click={props.click} opened={props.opened} />
      <div className={[styles.sideDrawer, styles[style]].join(" ")}>
        <ul className={styles.ul}>
          <NavItems></NavItems>
        </ul>
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
