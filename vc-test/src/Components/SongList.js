import React, { useState, useEffect, useRef, useCallback, useOnScreen } from "react";
import axios from "axios";
import { useInView } from 'react-intersection-observer'
import token from './Token.js';

//https://cors-anywhere.herokuapp.com

function SongList(props) {
  const [songs, setSongs] = useState([]);
  const [song, setSong] = useState('doja cat');
  const [covers, setCovers] = useState('')
  const [backgroundAlbum, setBackgroundAlbum] = useState()
  const [search, setSearch] = useState('')

  const { ref, inView, entry } = useInView({
    root: document.querySelector('#song-list-one'),
    threshold: 0,
  })

  useEffect(() => {
    findTheSong();
  }, []);

  async function findTheSong (){
    fetch(`https://api.spotify.com/v1/search?q=${song}&type=track&limit=15`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${await token()}`,
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
   
        setSongs(data.tracks.items)
        setBackgroundAlbum(data.tracks.items[0].album.images[0].url)
       //  loadSecond("https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3")
      });
  }
 
  const findSong = (e) => {
    e.preventDefault()
    findTheSong()
    setSearch('')
  }

  let albumCovers = []

  const showSongs = () => {
    return songs.map((eachSong) => {
      albumCovers.push(eachSong.album.images[1].url)
      return (
        // <ScrollAnimation 
        //   animateIn='pulse'
        //   initiallyVisible={true}
        //   scrollableParentSelector='#choose-song-id'
        //   animatePreScroll={false}>   
          <li ref={ref}
              key={eachSong.id} 
              className="track-bar" 
              tabIndex="1" 
              onClick={() => {
                props.displayChoice(eachSong, props.num);
                setBackgroundAlbum(eachSong.album.images[1].url)
                }}>
            <img src={eachSong.album.images[1].url} />
              <div className="titles">
                {/* {console.log(inView)} */}
                <p><b>{eachSong.name}</b> - {eachSong.name}</p>
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
        // </ScrollAnimation>
      );
    })
  };
  let albumBackground = {
    backgroundImage: `url(${backgroundAlbum})`,
  }
  return (
    <div>
      <div className="search-field-container">
        <h4>{props.selectKey}</h4>
        <form className="search-box" onSubmit={findSong}>
            <input type="text" 
                  id="search" 
                  value={search}
                  placeholder="Find favorite artist" 
                  onChange={(e) => {
                    setSong(e.target.value)
                    setSearch(e.target.value)}}
                  />
        </form>
      </div>
      <div className="choose-song-list" id={props.id} style={albumBackground}>
          {showSongs()}
      </div>
    </div>
  );
}

export default SongList;
