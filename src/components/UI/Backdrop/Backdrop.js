import React from "react";
import styles from "./Backdrop.module.css";
const Backdrop = (props) =>
  props.opened ? (
    <div onClick={props.click} className={styles.backdrop}>
      {props.children}
    </div>
  ) : null;

export default Backdrop;
