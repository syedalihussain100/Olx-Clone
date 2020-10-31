import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // USEEFFECT
  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        /// then user is login
        dispatch({
          type: "SET_USER",
          user: authuser,
        });
      } else {
        /// the user is looged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      ///Any cleanup operation go in here
      unsubcribe();
    };
  }, []);
  console.log("USER IS RUNNING",user)
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
