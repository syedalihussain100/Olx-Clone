import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    // sign in
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in and redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        /// create a user when logged in and redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="main__image">
      <Link className="login___logo" to="/">
        <h1 className="lolpop">Olx</h1>
      </Link>
      <div className="one">
        <h1>Sign-in</h1>
        <form>
          <h5 className="lol__wear">Email:</h5>
          <input
            className="one__two"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Name"
          />
          <h5 className="lol2">Password:</h5>
          <input
            className="one__three"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
          />
          <button
            onClick={login}
            type="submit"
            className="btn btn-dark btn__lol"
          >
            Sign in
          </button>
        </form>
        <p className="lol__p">Create your account. Set a budget.</p>
        <button onClick={register} className="btn btn-danger create__btn">
          Create Your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
