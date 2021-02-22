import React from "react";
import { Link } from "react-router-dom";
import album1 from "../images/jcole-album.jpg";
import album2 from "../images/hozier-album.jpg";
import album3 from '../images/doja-album.jpg'
import album4 from '../images/bob-dylan-album.jpg'
import album5 from '../images/billie-eilish-album.jpg'
import album6 from '../images/glass-animals-album.jpg'
import album7 from '../images/harry-styles-album.jpg'
import album8 from '../images/olivia-album.jpg'
import TestAudio from "./TestAudio.js";


function Home(props) {
  return (
    <div className="Home">
      <div className="hero-image">
        <div className="album-cover cover-2">
          <img src={album7} alt="" className="album-2" />
        </div>
        <div className="album-cover cover-1">
          <img src={album3} alt="" className="album-1" />
        </div>
      </div>
      <div className="intro-to-app">
        <div className="headline">
            <h1>Welcome to Muse</h1>
            <h4>A crazy fun and unique way to discover new music!</h4>
        </div>
        <div className="border-box"></div>
        <div className="text-box" id="hook">
            <p>Have you ever wondered what today's pop princess would 
               sound like over your favorite track from RapCaviar?</p>
            <p>Or perhaps you'd like to hear Harry Styles belt it out over 
                the thumping bass hits of Billie Eilish?
            </p>
            <p>
              Then you've got to try <span style={{color: 'rgb(253, 85, 85)', fontSize: '18px'}}>
              <b>Muse</b></span>!
            </p>
        </div>
        <div className="border-box"></div>
        <div className="text-box" id="instructions">
            <p>Simply pick 2 songs from our varied collection of hits!</p>
            <p>And we will transpose each of your songs keys into a high and a low, 
               then sync the BBM.</p>
        </div>
      </div>  
      <div className="example-container">
          <div className="play-button">
            <i className="fas fa-play"></i>
          </div>
          <div className="play-button-animation" id="pba-one"></div>
          <div className="song-details">
              <h4>Check it out!</h4>
          </div>
      </div>
      <div>
      
      </div>
     
    </div>

  );
}

export default Home;
