import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home.js";
import NavBar from "./Components/NavBar.js"
import TestAudio from "./Components/TestAudio.js";
import ChooseSong from './Components/ChooseSong.js'
import SongFun from './Components/SongFun.js'
import TestBpm from "./Components/TestBpm.js";
import TheContext from './TheContext'


function App() {


  const [userChoice1,setUserChoice1]=useState({
    artist1: `Pick a Song`,
    title1: `Pick a Song`,
    albumTitle1: `Pick a Song`,
    albumArt1: `https://i.scdn.co/image/ab67616d00001e0282b243023b937fd579a35533`,
    processSong1: ``
})

  const [userChoice2,setUserChoice2]=useState({
    artist2: `Pick a Song`,
    title2: `Pick a Song`,
    albumTitle2: `Pick a Song`,
    albumArt2: `https://i.scdn.co/image/ab67616d00001e0277fdcfda6535601aff081b6a`,
    processSong2: ``
})

  return (
    <TheContext.Provider value={{userChoice1, setUserChoice1, 
                                 userChoice2, setUserChoice2}}>
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
    </TheContext.Provider>
  );
}
export default App;