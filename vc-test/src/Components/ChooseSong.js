import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import SongList from './SongList.js'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css";

function ChooseSong(props) {
    let [name, setName] = useState('pick a song')
    let [albumArt, setAlbumArt] = useState()
    let [name2, setName2] = useState('pick a song 2')
    let [albumArt2, setAlbumArt2] = useState()
    let [processSong1,setProcessSong1] = useState();
    let [processSong2,setProcessSong2] = useState();

    const displayChoice = (x, num) => {
        if (num == 1) {
            setName(x.name)
            setAlbumArt(x.album.images[1].url)
            setProcessSong1(x)
        }
        else {
            setName2(x.name)
            setAlbumArt2(x.album.images[1].url)
            setProcessSong2(x)
        }
      }

      
    return (
        <div className="chooseSong">

            <h1>Choose Your Songs</h1>

            <div className="container-choose">
                <div className="song-box one">
                    <SongList num={1}
                        displayChoice = {displayChoice}
                        />
                </div>
                <div className="song-box two">
                    <SongList num={2}
                        displayChoice = {displayChoice}
                        />
                </div>    
            </div>

            <div className="song-choices">
                <div className="choice-one">
                    <img src={albumArt} alt=''/>
                    <div>
                        <p>{name}</p>
                    </div>
                </div>
                <div className="choice-two">
                    <img src={albumArt2} alt= '' />
                    <div>
                        <p>{name2}</p>
                    </div>
                </div>
            </div>


            <div className="example-container">
                <Link to="/TestAudio">
                <div className="play-button">
                    <i className="fas fa-play"></i>
                </div>
                </Link>
                <div className="play-button-animation" id="pba-two"></div>
            </div>

        </div>
    );
}

export default ChooseSong;

