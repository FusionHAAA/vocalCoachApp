import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css";

//https://cors-anywhere.herokuapp.com

function SongList(props) {
  const [songs, setSongs] = useState([]);
  let [song, setSong] = useState('doja cat');
  const [covers, setCovers] = useState('')

  useEffect(() => {
    findTheSong();
  }, []);

  const findTheSong = () => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:"${song}"`
      )
      .then((res) => {
        console.log(res);
        setSongs(res.data.data);
        setCovers(res.data.data[0].album.cover)
      });
  };

  const findSong = (e) => {
    e.preventDefault()
    findTheSong()
  }
  
  let albumCovers = []

  const showSongs = () => {
    const size = 6
    const firstSix = songs.slice(0, size).map((eachSong) => {
      albumCovers.push(eachSong.album.cover)
      return (
        <ScrollAnimation 
        animateIn='pulse'
        initiallyVisible={true}
        scrollableParentSelector='#choose-song-id'
        animatePreScroll={false}>

          <li key={eachSong.id} className="track-bar">
            <img src={eachSong.album.cover} />
              <div className="titles">
                <h5>{eachSong.title}</h5>
                <h6>{eachSong.album.title}</h6>
              </div>
              <div className="control-buttons">
                <i className="fas fa-play-circle"></i>
                {/* <i className="fas fa-pause-circle"></i> */}
              </div>
              <audio className="audio-bar">
                <source src={eachSong.preview} />
              </audio>
          </li>

        </ScrollAnimation>
      );
    })
    return firstSix
  };

  let albumBackground = {
    backgroundImage: `url(${covers})`,
  }

  return (
    // <div>
    //   <form onSubmit={findSong}>
    //       <input type="text" placeholder="" onChange={(e) => setSong(e.target.value)} />
    //       <button>Submit</button>
    //   </form> 
    //   {showSongs()}
    // </div>
    <div>
      <form className="search-box" onSubmit={findSong}>
          <input type="text" id="search" placeholder="Find a song" onChange={(e) => setSong(e.target.value)} />
      </form>
      <div className="choose-song-list" id="choose-song-id" style={albumBackground}>
          {showSongs()}

      </div>
  </div>
  );
}

export default SongList;
