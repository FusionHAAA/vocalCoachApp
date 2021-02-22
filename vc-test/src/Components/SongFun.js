import React from 'react';
import { Router, Route, Link } from 'react-router-dom'
import ChooseSong from './ChooseSong.js'
import TestAudio from './TestAudio.js'
import SongList from './SongList.js'
import { PinDropSharp } from '@material-ui/icons';
import KeyControlBar from './KeyControlBar.js';
import AudioCanvas from './AudioCanvas'


function SongFun(props) {
    console.log("spotify props", props.location.spotifyInfo)

    return (
        <div className="SongFun">
            <div className="page-header">
                <h1>Customize Your Songs</h1>
            </div>
            <div className="customize cust-song-1">
                <div className="audio-canvas canvas-1" >
                   <AudioCanvas num={1} />
                </div>
                <div className="track-listing tr-1" style={{backgroundImage: `url(${props.location.spotifyInfo.albumArt1})`}}>
                    <div className="artist-album-pic">
                        <img src={props.location.spotifyInfo.albumArt1} alt=''/>
                    </div>
                    <div className="artist-title-text"style={{textAlign: 'end'}}>
                        <p><b>{props.location.spotifyInfo.artist1}</b></p>
                        <p>{props.location.spotifyInfo.title1}</p>
                        <p style={{color: 'rgb(0 255 208)'}}>{props.location.spotifyInfo.albumTitle1}</p>
                    </div>
                </div>
                <div className="bg-color">
                    <div className="bg-wave-1">
                        <KeyControlBar
                            song={props.location.spotifyInfo.processSong1}
                            num={1}
                        />
                    </div>
                </div>
            </div>
            <div className="customize-transpose">
                <div className="play-transposed-song pts-1">
        
                </div>
                <div className="play-transposed">
                    <button className="transpose" id="transpose-2">Muse</button>
                </div>
                <div className="play-transposed-song pts-2">

                </div>
            </div>
            <div className="customize cust-song-2">
                <div className="bg-color">
                    <div className="bg-wave-2">
                    <KeyControlBar
                            song={props.location.spotifyInfo.processSong2}
                            num={2}
                            specificId={'this-works'}
                        />
                    </div>
                </div>
                <div className="track-listing tr-2" style={{backgroundImage: `url(${props.location.spotifyInfo.albumArt2})`}}>
                    <div className="artist-title-text">
                        <p><b>{props.location.spotifyInfo.artist2}</b></p>
                        <p>{props.location.spotifyInfo.title2}</p>
                        <p style={{color: 'rgb(0 255 208)'}}>{props.location.spotifyInfo.albumTitle2}</p>
                    </div>
                    <div className="artist-album-pic">
                    <img src={props.location.spotifyInfo.albumArt2} />
                    </div>
                </div>
                <div className="audio-canvas">
                <AudioCanvas num={2}/>
                </div>
            </div>
        </div>
    );
}

export default SongFun;