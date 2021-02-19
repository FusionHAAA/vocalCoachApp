import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import SongList from './SongList.js'
import TestAudio from './TestAudio.js'

  // const [artist1, setArtist1] = useState()
    // const [title1, setTitle1] = useState('pick a song')
    // const [albumArt1, setAlbumArt1] = useState()
    // const [artist2, setArtist2] = useState()
    // const [title2, setTitle2] = useState('pick a second song')
    // const [albumArt2, setAlbumArt2] = useState()

    // const displayChoice = (x, num) => {
    //     if (num == 1) {
    //         setArtist1(x.artist.name)
    //         setTitle1(x.title)
    //         setAlbumArt1(x.artist.picture)
    //     }
    //     else {
    //         setArtist2(x.artist.name)
    //         setTitle2(x.title)
    //         setAlbumArt2(x.artist.picture)
    //     }
    //   }
function ChooseSong(props) {
    let [name, setName] = useState('pick a song')
    let [albumArt, setAlbumArt] = useState()
    let [name2, setName2] = useState('pick a song 2')
    let [albumArt2, setAlbumArt2] = useState()
    let [processSong1,setProcessSong1] = useState();
    let [processSong2,setProcessSong2] = useState();
    let [songId1,setSongId1] = useState();
    let [songId2,setSongId2] = useState();

    const displayChoice = (x, num) => {
        if (num == 1) {
            setName(x.name)
            setAlbumArt(x.album.images[1].url)
            setProcessSong1(x.preview_url)
            setSongId1(x)
        }
        else {
            setName2(x.name)
            setAlbumArt2(x.album.images[1].url)
            setProcessSong2(x.preview_url)
            setSongId2(x)
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
                    <img src={albumArt} alt=''/>
                    <div>
                        {/* <p><b>{artist1}</b></p> */}
                        <p>{name}</p>
                    </div>
                </div>
                <div className="transpose-container">
                    {/* <button className="transpose"><b>Transpose</b></button> */}
                    <TestAudio 
                        songOne = {processSong1}
                        songTwo = {processSong2}
                        songIdOne={songId1}
                        songIdTwo={songId2}
                        />
                </div>
                <div className="choice-two">
                    <img src={albumArt2} alt= '' />
                    <div>
                        {/* <p><b>{artist2}</b></p> */}
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
                <div className="song-details">
                </div>
            </div>

        </div>
    );
}

export default ChooseSong;

