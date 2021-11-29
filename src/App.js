import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// components
import Topbar from "./components/Topbar/Topbar";

// pages
import Home from "./pages/Home/Home";
import Playlists from "./pages/Playlists/Playlists"

const App = () => {
  return (
    <Router>
      <Topbar />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/playlists" component={Playlists} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
