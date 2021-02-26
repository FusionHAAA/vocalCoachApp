import React, { useState, useEffect } from "react";
import axios from "axios";
import token from './Token.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LocalConvenienceStoreOutlined } from "@material-ui/icons";

function SongList(props) {
  const artistArray = ['doja cat', 'cardi b', 'dua lipa', 'sza',
                       'harry styles', 'doja cat', 'harry styles', 'bts',
                       'the neighbourhood', 'deftones', 'hozier',
                       'doja cat', 'northlane', 'spiritbox', 'travis scott',]
  const [songs, setSongs] = useState([]);
  const [song, setSong] = useState(`${artistArray[Math.floor(Math.random() * artistArray.length)]}`);
  const [backgroundAlbum, setBackgroundAlbum] = useState()
  const [search, setSearch] = useState('')
  const [footOpacity, setFootOpacity] = useState(1)
  const [focused, setFocused] = useState()

  
  useEffect(() => {
    findTheSong();
    document.querySelector('.example-container').style.opacity = footOpacity
  }, [footOpacity]);
 
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
        // console.log(data)
        setSongs(data.tracks.items)
        setBackgroundAlbum(data.tracks.items[0].album.images[0].url)
       //  loadSecond("https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3")
      });
  }
 
  const findSong = (e) => {
    e.preventDefault()
    findTheSong()
    setSearch(`Songs by ${song}`)
    focused.blur()
  }

  let albumCovers = []

  const showSongs = () => {
    return songs.map((eachSong) => {
      albumCovers.push(eachSong.album.images[1].url)
      return ( 
          <li key={eachSong.id} 
              className="track-bar" 
              tabIndex="1" 
              onClick={() => {
                props.displayChoice(eachSong, props.num);
                setBackgroundAlbum(eachSong.album.images[1].url)
                }}>
              <div className="album-pic-container">
                <img src={eachSong.album.images[1].url} alt='album'/>
              </div>
              <div className="titles">
                <p><b>{eachSong.artists[0].name}</b> - {eachSong.name}</p>
                <p style={{color: '#D94F81'}}>{eachSong.album.name}</p>
              </div>
              <div className="control-buttons">
                <i className="fas fa-play-circle" 
                   id={`${eachSong.id}${props.num}`}
                   onClick={() => {
                    if (document.getElementById(`${eachSong.name}${props.num}`).paused) 
                    {
                      document.querySelectorAll('audio').forEach((x)=> { x.pause() })
                      document.querySelectorAll('.fa-play-circle, .fa-pause-circle').forEach((x)=>{x.setAttribute('class', 'fas fa-play-circle')})
                      document.getElementById(`${eachSong.name}${props.num}`).play()
                      document.getElementById(`${eachSong.id}${props.num}`).setAttribute('class', 'fas fa-pause-circle')
                    }
                    else 
                    {
                      document.getElementById(`${eachSong.name}${props.num}`).pause()
                      document.getElementById(`${eachSong.id}${props.num}`).setAttribute('class', 'fas fa-play-circle')
                    }
                  }}>
                </i>
              </div>
              <audio className="audio-bar" id={`${eachSong.name}${props.num}`}>
                <source src={eachSong.preview_url} />
              </audio>
          </li>
      );
    })
  };
  let albumBackground = {
    backgroundImage: `url(${backgroundAlbum})`,
  }

  return (
    <div className="choose-song-containers" id={props.marginList}>
      <div className="search-field-container">
        <h4>{props.selectKey}</h4>
        <form className="search-box" onSubmit={findSong}>
          <i className="fas fa-search" id="srch"></i>
          <input type="text" 
                className="search"
                id={props.inputFocus}
                autoComplete="off"
                value={search}
                placeholder= 'Find favorite artist'
                onChange={(e) => {
                  setSong(e.target.value)
                  setSearch(e.target.value)}}
                onFocus={(e) => {
                  setSearch('')
                  setFocused(e.target)
                  setFootOpacity(0)
                }}
                onBlur={() => {
                  setFootOpacity(1)
                }}
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
