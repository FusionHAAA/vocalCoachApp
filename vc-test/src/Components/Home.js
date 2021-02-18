import React from "react";
import { Link } from "react-router-dom";
import album1 from "../images/jcole-album.jpg";
import album2 from "../images/hozier-album.jpg";
import BeatDetectorTest from "./BeatDetectorTest";

function Home(props) {
  return (
    <div className="Home">
      <div className="hero-image">
        <div className="album-cover cover-2">
          <img src={album2} alt="" className="album-2" />
        </div>
        <div className="album-cover cover-1">
          <img src={album1} alt="" className="album-1" />
        </div>
      </div>

      <h1>Welcome to Muse</h1>
      <div>
        <Link to="/TestAudio">Test Audio</Link>
        <Link to="/TestApiSpo">Test Spotify</Link>
        <Link to="/TestBpm">Test Bpm</Link>
      </div>
      <BeatDetectorTest />
    </div>

  );
}

export default Home;
