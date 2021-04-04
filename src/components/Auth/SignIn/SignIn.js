import React, { useState } from "react";
import styles from "./SignIn.module.css";
import Button from "../../UI/Button/Button";
import inputStyles from "../../NewRecipe/NewRecipe.module.css";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../../firebase/config";
const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let signNow = null;
  if (props.formType === "Sign In") {
    signNow = (
      <div className={styles.signUpNow}>
        <p className={styles.p}>Don't have account? </p>
        <Link className={styles.signUpA} to="/signUp">
          Sign up now
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.signInContainer}>
      <h1 className={styles.center}>{props.formType} </h1>
      <input
        onChange={(event) => setEmail(event.target.value)}
        className={inputStyles.input}
        type="text"
        placeholder="E-mail"
      />
      <input
        onChange={(event) => setPassword(event.target.value)}
        className={inputStyles.input}
        type="password"
        placeholder="Password"
      />
      <Button
        click={() => props.signingFunction(email, password)}
        btnType="sendDataButton"
      >
        Sign In
      </Button>
      <p className={styles.center}>or</p>
      <Button btnType="sendDataButton" click={signInWithGoogle}>
        Sign in with Google
      </Button>
      {signNow}
    </div>
  );
};

export default SignIn;
