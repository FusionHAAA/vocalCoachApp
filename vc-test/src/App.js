import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home.js";
import NavBar from "./Components/NavBar.js"
import TestAudio from "./Components/TestAudio.js";
import ChooseSong from './Components/ChooseSong.js'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css";

// import SongList from './Components/SongList.js'
// import TestApiSpo from "./Components/TestApiSpo.js";
// import token from "./Components/Token.js";
//
function App() {
  // let [artist, setArtist] = useState("beatles");
  // let [artists, setArtists] = useState([]);
  // useEffect(() => {
  //   fetch(`https://api.spotify.com/v1/search?q=${artist}&type=artist`, {
  //     headers: {
  //       Accept: "application/json",
  //       Authorization: `Bearer ${token()}`,
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setArtist(data.artists);
  //     });
  // }, []);


  return (
    <div className="App">
      {/* <TestAudio />
      Convert audio to different key */}
      <NavBar />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/ChooseSong" render={(props) => <ChooseSong {...props} />} />
        {/* <Route
          exact
          path="/TestAudio"
          render={(props) => <TestAudio {...props} />}
        />
        <Route
          exact
          path="/TestApiSpo"
          render={(props) => <TestApiSpo {...props} />}
        /> */}
      </Switch>
    </div>
  );
}
export default App;