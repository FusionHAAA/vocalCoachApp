import React, {useRef,useState,useEffect} from "react";
import { Link } from "react-router-dom";
import album1 from "../images/jcole-album.jpg";
import album2 from "../images/hozier-album.jpg";
import album3 from '../images/doja-album.jpg'
import album4 from '../images/bob-dylan-album.jpg'
import album5 from '../images/billie-eilish-album.jpg'
import album6 from '../images/glass-animals-album.jpg'
import album7 from '../images/harry-styles-album.jpg'
import album8 from '../images/olivia-album.jpg'
import album9 from '../images/harry-album-cover.jpg'
import TestAudio from "./TestAudio.js";
import chipmunks from '../assets/GoldenChipmunks.mp3'
import dojaDog from '../assets/DojaDog.m4a'
import goldenH from '../assets/HomeScreen Mix.m4a'
import saySo from '../assets/saySo.mp3'

function Home(props) {

  const audio1=()=>{
    
    if(document.getElementById('golden').paused===true){
      document.getElementById('golden').play()
      if(document.getElementById('doja').paused===false){
        document.getElementById('doja').pause()
      }
    }else{
      document.getElementById('golden').pause()
    }
  }
  const audio2=()=>{
    
    if(document.getElementById('doja').paused===true){
      document.getElementById('doja').play()
      if(document.getElementById('golden').paused===false){
        document.getElementById('golden').pause()
      }
    }else{
      document.getElementById('doja').pause()
    }
  }

  const audioFused=()=>{
  
    if(document.getElementById('fused1').paused===true){
     
      document.getElementById('fused1').play()
    
      document.getElementById('button').setAttribute('class', 'fas fa-pause')
    
    }else{
     stopFuse();
      document.getElementById('button').setAttribute('class', 'fas fa-play')
    }
  }
  
  const stopFuse=()=>{
    document.getElementById('fused1').pause()

     
  }


  return (
    <div className="Home">
      <div className="hero-image">
        <div className="album-cover cover-2">
          <img src={album9}  onClick={audio1} alt="" className="album-2" />
          <audio  src={chipmunks} id="golden" ></audio>
        </div>
        <div className="album-cover cover-1">
          <img src={album3} onClick={audio2} alt="" className="album-1" />
          <audio src={dojaDog} id="doja"></audio>
        </div>
      </div>
      <div className="intro-to-app">
        <div className="headline">
            <h1>Welcome to Muse</h1>
            <h4>A crazy fun and unique way to discover new music!</h4>
        </div>
        <div className="border-box"></div>
        <div className="text-box hook">
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
        <div className="text-box hook" id="instructions">
            <p>Simply pick 2 songs from our varied collection of hits thanks to Spotify!</p>
            <p>And we will transpose each of your song's keys into a high and a low, 
               then sync the BBM.</p>
            <p>Creating a beautiful and sometimes scary new song!</p>
        </div>
        <div className="border-box"></div>
        <div className="text-box hook" id="instructions">
          <p>Please press the play button and sample a <span style={{color: 'rgb(253, 85, 85)', fontSize: '18px'}}>
              <b>Mused</b></span> track featuring the above artists!</p>
        </div>
      </div>
      <div className="example-container">
          <div className="play-button" onClick={audioFused}>
            <i id='button' className="fas fa-play"></i>
            <audio 
             src={goldenH} id={'fused1'}></audio>

          </div>
          <div  className="play-button-animation" id="pba-one"></div>
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
