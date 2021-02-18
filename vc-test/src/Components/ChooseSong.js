import React, { useEffect } from 'react';
import SongList from './SongList.js'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css";

function ChooseSong(props) {
    return (
        <div className="chooseSong">

            <h1>Choose Your Songs</h1>

            <div className="container-choose">
                <div className="song-box one">
                    <SongList />
                </div>
                <div className="song-box two">
                    <SongList />
                </div>
            </div>

            <div className="example-container">
                <div className="play-button">
                    <i className="fas fa-play"></i>
                </div>
                <div className="play-button-animation"></div>
            </div>

        </div>
    );
}

export default ChooseSong;

      
{/* <div className="song-box one">
    <form className="search-box">
        <input type="text" id="search" placeholder="Find a song"></input>
    </form>
    <div className="choose-song-list">
        <SongList />
    </div>
</div>
<div className="song-box two">
    <form className="search-box">
        <input type="text" id="search" placeholder="Find a song"></input>
    </form>
    <div className="choose-song-list">
        <SongList />
    </div>
</div> */}