import React, { useState, useEffect, useRef, useCallback, useOnScreen } from "react";
import axios from "axios";
import { useInView } from 'react-intersection-observer'

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
    setSearch('')
  }

  let albumCovers = []

  const showSongs = () => {
    const size = 6
    const firstSix = songs.slice(0, size).map((eachSong) => {
      albumCovers.push(eachSong.album.cover)
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
                setBackgroundAlbum(eachSong.album.cover)
                }}>
            <img src={eachSong.album.cover} />
              <div className="titles">
                {console.log(inView)}
                <p><b>{eachSong.artist.name}</b> - {eachSong.title}</p>
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
        // </ScrollAnimation>
      );
    })
    return firstSix
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
