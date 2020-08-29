/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from "react";

import { AuthContext } from "../context/auth-context";

import "./Auth.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { login, createUser } = useContext(AuthContext);

  const emailEl = React.createRef();
  const passwordEl = React.createRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const email = emailEl.current.value;
    const password = passwordEl.current.value;

    if (email.trim().label === 0 || password.trim().length === 0) return;

    let sendRequest = () => login(email, password);
    if (!isLogin) sendRequest = () => createUser(email, password);
    sendRequest();
  };

  const switchModeHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <form className="auth-form" onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="email">E-Mail</label>
        <input type="email" id="email" ref={emailEl} />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordEl} />
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
        <button type="button" onClick={switchModeHandler}>
          Switch to {isLogin ? "Signup" : "Login"}
        </button>
      </div>
    </form>
  );
};

export default AuthPage;
