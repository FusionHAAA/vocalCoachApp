import React, { useEffect, useState } from 'react';
import SongList from './SongList.js'
import { useInView } from 'react-intersection-observer'

function ChooseSong(props) {
    const [artist1, setArtist1] = useState()
    const [title1, setTitle1] = useState('pick a song')
    const [albumArt1, setAlbumArt1] = useState()
    const [artist2, setArtist2] = useState()
    const [title2, setTitle2] = useState('pick a second song')
    const [albumArt2, setAlbumArt2] = useState()

    const displayChoice = (x, num) => {
        if (num == 1) {
            setArtist1(x.artist.name)
            setTitle1(x.title)
            setAlbumArt1(x.artist.picture)
        }
        else {
            setArtist2(x.artist.name)
            setTitle2(x.title)
            setAlbumArt2(x.artist.picture)
        }
      }

    return (
        <div className="chooseSong">
            <h1>Choose Your Songs</h1>

            <div className="container-choose">
                <SongList num={1}
                    displayChoice = {displayChoice}
                    id = 'song-list-one'
                    selectKey = "Choose Song #1:"
                    />
                <SongList num={2}
                    displayChoice = {displayChoice}
                    id = 'song-list-two'
                    selectKey = "Choose Song #2:"
                    />
            </div>

            <div className="song-choices">
                <div className="choice-one">
                    <img src={albumArt1} />
                    <div>
                        <p><b>{artist1}</b></p>
                        <p>{title1}</p>
                    </div>
                </div>
                <div className="transpose-container">
                    <button className="transpose"><b>Transpose</b></button>
                </div>
                <div className="choice-two">
                    <img src={albumArt2} />
                    <div>
                        <p><b>{artist2}</b></p>
                        <p>{title2}</p>
                    </div>
                </div>
            </div>


            <div className="example-container">
                <div className="play-button">
                    <i className="fas fa-play"></i>
                </div>
                <div className="play-button-animation" id="pba-two"></div>
                <div className="song-details">
                </div>
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