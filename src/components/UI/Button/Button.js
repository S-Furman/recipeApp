import React from "react";
import styles from "./Button.module.css";
const Button = (props) => {
  console.log(props.btnType);
  return (
    <button
      onClick={props.click}
      type="button"
      className={[styles.button, styles[props.btnType]].join(" ")}
    >
      {props.children}
    </button>
  );
};

export default Button;
