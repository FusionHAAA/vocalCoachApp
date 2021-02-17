import React from "react";
import "./App.css";
import { Switch, Route, Link } from 'react-router-dom'
// import TestBillboard from "./Components/TestBillboard.js";
import NavBar from './Components/NavBar.js'
import Home from './Components/Home.js'
import ChooseSong from './Components/ChooseSong.js'
import TestAudio from "./Components/TestAudio.js";
import ReactAudioPlayer from 'react-audio-player';
import soundCheck from "./assets/Mala Nota.mp3";
import TestApiSpo from "./Components/TestApiSpo.js";

function App() {
  return (
    <div className="App">
      {/* <TestAudio /> */}
      <NavBar />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/Components/TestAudio" render={(props) => <TestAudio {...props} />} />
        <Route exact path="/Components/ChooseSong" render={(props) => <ChooseSong {...props} />} />

      </Switch>
    </div>
  );
}

export default App;
