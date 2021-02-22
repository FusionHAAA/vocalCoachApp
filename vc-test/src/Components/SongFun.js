import React, { useState } from 'react';
import { Router, Route, Link } from 'react-router-dom'
import ChooseSong from './ChooseSong.js'
import TestAudio from './TestAudio.js'
import SongList from './SongList.js'
import { PinDropSharp } from '@material-ui/icons';
import KeyControlBar from './KeyControlBar.js';
import AudioCanvas from './AudioCanvas'
import axios from "axios";

function SongFun(props) {
    console.log("spotify props", props.location.spotifyInfo)
    const [lyrics1,setLyrics1]= useState('')
    const [lyrics2,setLyrics2]= useState('')
    
const options = {
    method: 'GET',
    url: 'https://genius.p.rapidapi.com/search',
    params: {q: `${props.location.spotifyInfo.title1} ${props.location.spotifyInfo.artist1}`},
    headers: {
      'x-rapidapi-key': 'ec351e9165mshcef3af4c94a5ec8p138886jsn2f7eee2568ca',
      'x-rapidapi-host': 'genius.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
     setLyrics1(response.data.response.hits[0].result.url);
  }).catch(function (error) {
      console.error(error);
  });

  const options1 = {
    method: 'GET',
    url: 'https://genius.p.rapidapi.com/search',
    params: {q: `${props.location.spotifyInfo.title2} ${props.location.spotifyInfo.artist2}`},
    headers: {
      'x-rapidapi-key': 'ec351e9165mshcef3af4c94a5ec8p138886jsn2f7eee2568ca',
      'x-rapidapi-host': 'genius.p.rapidapi.com'
    }
  };
  
  axios.request(options1).then(function (response) {
      setLyrics2(response.data.response.hits[0].result.url)
  }).catch(function (error) {
      console.error(error);
  });

       

    return (
        <div className="SongFun">
            <div className="page-header">
                <h1>Customize Your Songs</h1>
            </div>
            <div className="customize cust-song-1">
                <div className="audio-canvas canvas-1" >
                   <AudioCanvas num={1} />
                </div>
                <div className="track-listing tr-1" style={{backgroundImage: `url(${props.location.spotifyInfo.albumArt1})`}}>
                    <div className="artist-album-pic">
                        <img src={props.location.spotifyInfo.albumArt1} alt=''/>
                    </div>

                    <div className="artist-title-text"style={{textAlign: 'end'}}>
                        <p><b>{props.location.spotifyInfo.artist1}</b></p>
                        <p><a href={`${lyrics1}`} className="lyrics lyrics-1">lyrics</a> - {props.location.spotifyInfo.title1}</p>
                        <p style={{color: 'rgb(0 255 208)'}}>{props.location.spotifyInfo.albumTitle1}</p>
                    </div>
                </div>
                <div className="bg-color">
                    <div className="bg-wave-1">
                        <KeyControlBar
                            song={props.location.spotifyInfo.processSong1}
                            num={1}
                        />
                    </div>
                </div>
            </div>
            <div className="customize-transpose">
                <div className="play-transposed-song pts-1">
        
                </div>
                <div className="play-transposed">
                    <button className="transpose" id="transpose-2">Muse</button>
                </div>
                <div className="play-transposed-song pts-2">

                </div>
            </div>
            <div className="customize cust-song-2">
                <div className="bg-color">
                    <div className="bg-wave-2">
                    <KeyControlBar
                            song={props.location.spotifyInfo.processSong2}
                            num={2}
                            specificId={'this-works'}
                        />
                    </div>
                </div>
                <div className="track-listing tr-2" style={{backgroundImage: `url(${props.location.spotifyInfo.albumArt2})`}}>
                    <div className="artist-title-text">
                        <p><b>{props.location.spotifyInfo.artist2}</b></p>
                        <p>{props.location.spotifyInfo.title2} - <a href={`${lyrics2}`} className="lyrics lyrics-2">lyrics</a></p>
                        <p style={{color: 'rgb(0 255 208)'}}>{props.location.spotifyInfo.albumTitle2}</p>
                    </div>
                    <div className="artist-album-pic">
                    <img src={props.location.spotifyInfo.albumArt2} />
                    </div>
                </div>
                <div className="audio-canvas">
                <AudioCanvas num={2}/>
                </div>
            </div>
        </div>
    );
}

export default SongFun;