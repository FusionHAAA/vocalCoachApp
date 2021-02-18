import React, { useState, useEffect } from "react";
import axios from "axios";
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css";

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

  const findTheSong = () => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:"${song}"`
      )
      .then((res) => {
        console.log(res);
        setSongs(res.data.data);
        setBackgroundAlbum(res.data.data[0].album.cover)
      });
  };

  const findSong = (e) => {
    e.preventDefault()
    findTheSong()
  }
  // const displayChoice = (x) => {
  //   setName(x.title)
  //   setAlbumArt(x.artist.picture)
  //   setBackgroundAlbum(x.album.cover)
  // }

  let albumCovers = []

  const showSongs = () => {
    const size = 6
    const firstSix = songs.slice(0, size).map((eachSong, index) => {
      albumCovers.push(eachSong.album.cover)
      return (
        <ScrollAnimation 
          animateIn='pulse'
          initiallyVisible={true}
          scrollableParentSelector='#choose-song-id'
          animatePreScroll={false}>
        
          <li key={eachSong.id} className="track-bar" tabIndex="1" onClick={() => {props.displayChoice(eachSong, props.num);setBackgroundAlbum(eachSong.album.cover)}}>
            <img src={eachSong.album.cover} />
              <div className="titles">
                <p>{eachSong.title}</p>
                <p>{eachSong.album.title}</p>
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
