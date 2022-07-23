import { Route, Switch } from "react-router-dom";

import Actors from "./Actors";
import Directors from "./Directors";
import Home from "./Home";
import Movies from "./Movies";
import NavBar from "./NavBar";
import React from "react";

function App(){
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/directors">
          <Directors />
        </Route>
        <Route path="/actors">
          <Actors />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
