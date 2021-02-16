import React from 'react'
import "./App.css";
import { Switch, Route, Link } from 'react-router-dom'
// import TestBillboard from "./Components/TestBillboard.js";
import Home from './Components/Home.js'
import TestAudio from "./Components/TestAudio.js";
import SongList from './Components/SongList.js'

function App() {
  return (
    <div className="App">
      {/* <TestAudio /> */}

      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/TestAudio" render={(props) => <TestAudio {...props} />} />
        <Route exact path="/SongList" render={(props) => <SongList {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
