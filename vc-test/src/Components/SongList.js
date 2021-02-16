import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
//https://cors-anywhere.herokuapp.com

function SongList(props) {
    const [songs, setSongs] = useState([])
    let [song, setSong] = useState('eminem')

    useEffect(() => {
        findTheSong()
      }, [])
    
    const findTheSong = () => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${song}`)
        .then(res => {
            console.log(res)
            setSongs(res.data.data)
        })
    }

    const findSong = (e) => {
        e.preventDefault()
        findTheSong()
      }

    const showSongs = () => {
        return songs.map(eachSong => {
          return (
            <li key={eachSong.id} className="track-bar">
                <img src={eachSong.album.cover} />            
                <div>
                    <h5>{eachSong.title}</h5>
                    <audio controls className="audio-bar">
                        <source src={eachSong.preview} />
                        <button >Play</button>
                    </audio>
                </div>
            </li>
          )
        })
    }

    return (
        <div>
            {/* <form onSubmit={findSong}>
                <input type="text" placeholder="" onChange={(e) => setSong(e.target.value)} />
                <button>Submit</button>
            </form> */}
            {showSongs()}
        </div>
    );
}

export default SongList;

{/* <li key={eachSong.id} className="track-bar">
<img src={eachSong.album.cover} />
  <div>
      <h5>{eachSong.title}</h5>
      <audio controls className="audio-bar">
          <source src={eachSong.preview} />
      </audio>
  </div>
</li> */}