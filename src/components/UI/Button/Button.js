import React from "react";
import styles from "./Button.module.css";
const Button = (props) => {
  const btnStyling = [styles.button, styles[props.btnType]];
  if (props.disabled) {
    btnStyling.push(styles.disabled);
  }

  return (
    <button
      disabled={props.disabled}
      onClick={props.click}
      type="button"
      className={btnStyling.join(" ")}
    >
      {props.children}
    </button>
  );
};

export default Button;
