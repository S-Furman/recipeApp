import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../../firebase/config";

import styles from "./SignIn.module.css";
import inputStyles from "../../NewRecipe/NewRecipe.module.css";

import Button from "../../UI/Button/Button";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let signNow = null;
  if (props.formType === "Sign In") {
    signNow = (
      <p>
        Don't have account?
        <Link className={styles.signUpA} to="/signUp">
          Sign up now
        </Link>{" "}
      </p>
    );
  }

  return (
    <section className={styles.signInContainer}>
      <header style={{ marginBottom: "20px", fontSize: "1.5em" }}>
        {props.formType}
      </header>
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
        btnType="signIn"
      >
        Sign In
      </Button>
      <Button btnType="signIn" click={signInWithGoogle}>
        Sign in with Google
      </Button>
      {signNow}
    </section>
  );
};

export default SignIn;
