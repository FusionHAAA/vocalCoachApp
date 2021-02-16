import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./Components/Home.js";
import TestAudio from "./Components/TestAudio.js";
import TestApiSpo from "./Components/TestApiSpo.js";

function App() {
  return (
    <div className="App">
      {/* <TestAudio />
      Convert audio to different key */}

      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/TestAudio"
          render={(props) => <TestAudio {...props} />}
        />
        <Route
          exact
          path="/TestApiSpo"
          render={(props) => <TestApiSpo {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
