import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home.js";
import NavBar from "./Components/NavBar.js"
import TestAudio from "./Components/TestAudio.js";
import ChooseSong from './Components/ChooseSong.js'
import SongFun from './Components/SongFun.js'
import TestBpm from "./Components/TestBpm.js";


function App() {

  return (
    <div className="App">
      {/* <TestAudio />
      Convert audio to different key */}
      <NavBar />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/ChooseSong" render={(props) => <ChooseSong {...props} />} />
        <Route exact path="/SongFun" render={(props) => <SongFun {...props} />} />
        <Route
          exact
          path="/TestAudio"
          render={(props) => <TestAudio {...props} />}
        />

      </Switch>
    </div>
  );
}
export default App;