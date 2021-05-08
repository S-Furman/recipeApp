import { useContext, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { signInWithGoogle } from "../../../firebase/config";

import styles from "./Login.module.css";
import inputStyles from "../../NewRecipe/NewRecipe.module.css";

import Button from "../../UI/Button/Button";
import { AuthContext } from "../../../store/AuthContext";

const Login = (props) => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  let url;

  if (props.formType === "Sign Up") {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCBiNHtOjC3YYN2ntLQXqqjYXY6NEnjakc";
  } else if (props.formType === "Sign In") {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCBiNHtOjC3YYN2ntLQXqqjYXY6NEnjakc";
  }

  const email = useRef();
  const password = useRef();
  let signNow = null;
  if (props.formType === "Sign In") {
    signNow = (
      <p>
        Don't have account?
        <Link className={styles.signUpA} to="/signUp">
          Sign up now
        </Link>
      </p>
    );
  }

  const login = () => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        history.replace("/");
        if (res.ok) {
          res.json().then((data) => authContext.login(data.idToken));
        } else {
          res.json().then((data) => alert(data.error.message));
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return (
    <section className={styles.signInContainer}>
      <header style={{ marginBottom: "20px", fontSize: "1.5em" }}>
        {props.formType}
      </header>
      <input
        ref={email}
        className={inputStyles.input}
        type="text"
        placeholder="E-mail"
      />
      <input
        ref={password}
        className={inputStyles.input}
        type="password"
        placeholder="Password"
      />
      <Button click={login} btnType="signIn">
        Sign In
      </Button>
      <Button btnType="signIn" click={signInWithGoogle}>
        Sign in with Google
      </Button>
      {signNow}
    </section>
  );
};

export default Login;
