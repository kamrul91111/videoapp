import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// components
import Topbar from "./components/Topbar/Topbar";

// pages
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Router>
      <Topbar />
      <div>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
