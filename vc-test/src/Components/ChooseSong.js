import React, { useEffect, useState } from 'react';
import SongList from './SongList.js'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css";

function ChooseSong(props) {
    let [name, setName] = useState('pick a song')
    let [albumArt, setAlbumArt] = useState()
    let [name2, setName2] = useState('pick a song 2')
    let [albumArt2, setAlbumArt2] = useState()

    const displayChoice = (x, num) => {
        if (num == 1) {
            setName(x.title)
            setAlbumArt(x.artist.picture)
        }
        else {
            setName2(x.title)
            setAlbumArt2(x.artist.picture)
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
                    <img src={albumArt} />
                    <div>
                        <p>{name}</p>
                    </div>
                </div>
                <div className="choice-two">
                    <img src={albumArt2} />
                    <div>
                        <p>{name2}</p>
                    </div>
                </div>
            </div>


            <div className="example-container">
                <div className="play-button">
                    <i className="fas fa-play"></i>
                </div>
                <div className="play-button-animation" id="pba-two"></div>
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