import React, { useState, useEffect } from "react";
import axios from "axios";
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css";
import SpotifyObject from './SpotifyObject'
import token from './Token.js';


//https://cors-anywhere.herokuapp.com

function SongList(props) {
  const [songs, setSongs] = useState([]);
  let [song, setSong] = useState('doja cat');
  const [covers, setCovers] = useState('')
  // let [name, setName] = useState('pick a song')
  // let [albumArt, setAlbumArt] = useState()
  let [backgroundAlbum, setBackgroundAlbum] = useState()

  useEffect(() => {
    findTheSong();
  }, []);

  
  async function findTheSong (){
    fetch(`https://api.spotify.com/v1/search?q=${song}&type=track&limit=10`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${await token()}`,
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
    console.log(data.tracks.items)
        setSongs(data.tracks.items)
        setBackgroundAlbum(data.tracks.items[0].album.images[0].url)
       //  loadSecond("https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3")
      });
  }
 

  const findSong = (e) => {
    e.preventDefault()
    findTheSong()
  }

  


  let albumCovers = []

  const showSongs = () => {
    const size = 6
    const firstSix = songs.slice(0, size).map((eachSong, index) => {
      albumCovers.push(eachSong.album.images[1].url)
      return (
        <ScrollAnimation 
          animateIn='pulse'
          initiallyVisible={true}
          scrollableParentSelector='#choose-song-id'
          animatePreScroll={false}>
        
          <li key={eachSong.id} className="track-bar" tabIndex="1" onClick={() => {props.displayChoice(eachSong, props.num);setBackgroundAlbum(eachSong.album.images[1].url)}}>
            <img src={eachSong.album.images[1].url} alt='' />
              <div className="titles">
                <p>{eachSong.name}</p>
                <p>{eachSong.album.name}</p>
              </div>
              <div className="control-buttons">
                <i className="fas fa-play-circle"></i>
                {/* <i className="fas fa-pause-circle"></i> */}
              </div>
              <audio className="audio-bar">
                <source src={eachSong.preview_url} />
              </audio>
          </li>


        </ScrollAnimation>
      );
    })
    return firstSix
  };

  let albumBackground = {
    backgroundImage: `url(${backgroundAlbum})`,
  }

  return (
    <div>
      <form className="search-box" onSubmit={findSong}>
          <input type="text" id="search" placeholder="Find a song" onChange={(e) => setSong(e.target.value)} />
      </form>
      <div className="choose-song-list" id="choose-song-id" style={albumBackground}>
          {showSongs()}
      </div>
      {/* <div className="song-choices">
        <div className="choice-one">
            <h4>{name}</h4>
            <img src={albumArt} />
        </div>
      </div> */}
    </div>
  );
}

export default SongList;
