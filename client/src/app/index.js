import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar } from "../components";
import {
  LoginPage,
  RegisterPage,
  AddMovie,
  WelcomePage,
  MoviesList,
} from "../pages";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/add_movie" exact component={AddMovie} />
        <Route path="/get_movies" exact component={MoviesList} />
      </Switch>
    </Router>
  );
}

export default App;
