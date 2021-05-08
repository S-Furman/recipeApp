import React, { useState } from "react";

export const AuthContext = React.createContext({
  tokenId: "",
  isLogged: false,
  logout: () => {},
  login: () => {},
});

const AuthContextProvider = (props) => {
  const [token, setToken] = useState("");
  const isLogged = !!token;

  const logoutHandler = () => {
    setToken(null);
    console.log("siema");
  };

  const loginHandler = (tokenValue) => {
    setToken(tokenValue);
  };

  const contextValue = {
    tokenId: token,
    isLogged: isLogged,
    logout: logoutHandler,
    login: loginHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
