import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home.js";
import NavBar from "./Components/NavBar.js"
import TestAudio from "./Components/TestAudio.js";
import ChooseSong from './Components/ChooseSong.js'
import TestApiSpo from "./Components/TestApiSpo.js";
import TestBpm from "./Components/TestBpm.js";
import token from "./Components/Token.js";
// let t = token();
// console.log(t)
function App() {
  let [artist, setArtist] = useState("beatles");
  let [artists, setArtists] = useState([]);

  useEffect(() => {
   getSpotifyData();
  }, []);


  async function getSpotifyData() {
    fetch(`https://api.spotify.com/v1/search?q=beatles&type=artist&limit=5`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${await token()}`,
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setArtist(data.artists);
      });
  }

  return (
    <div className="App">
      {/* <TestAudio />
      Convert audio to different key */}
      <NavBar />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/ChooseSong" render={(props) => <ChooseSong {...props} />} />
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