import React from 'react';
import { Link } from 'react-router-dom'
import ChooseSong from './ChooseSong.js'
import TestAudio from './TestAudio.js'

function SongFun(props) {
    const {data} = props.location


    return (
        <div className="SongFun">
            <h1>{data}</h1>
            <div className="page-header">
                <h1>Customize Your Songs</h1>
            </div>
            <div className="customize cust-song-1">
                <div className="audio-canvas canvas-1">
                    animated audio canvas
                </div>
                <div className="track-listing tr-1">
                    <div className="artist-album-pic">
                        picture
                    </div>
                    <div className="artist-title-text">
                        <p>Artist</p>
                        <p>Song</p>
                        <p>Album</p>
                    </div>
                </div>
                <div className="audio-controls control-1">
                    <div className="audio-panels bpm-1">BPM control bar</div>
                    <div className="audio-panels key-1">Key control bar</div>
                </div>
            </div>
            <div className="customize-transpose">
                <div className="play-transposed-song pts-1">
                    play song 1
                </div>
                <div className="play-transposed">
                </div>
                <div className="play-transposed-song pts-1">
                    play song 2
                </div>
            </div>
            <div className="customize cust-song-2">
            <div className="audio-canvas canvas-2">
                    animated audio canvas
                </div>
                <div className="track-listing tr-2">
                    <div className="artist-album-pic">
                        picture
                    </div>
                    <div className="artist-title-text">
                        <p>Artist</p>
                        <p>Song</p>
                        <p>Album</p>
                    </div>
                </div>
                <div className="audio-controls control-2">
                    <div className="audio-panels bpm-control-2">BPM control bar</div>
                    <div className="audio-panels key-control-2">Key control bar</div>
                </div>
            </div>
        </div>
    );
}

export default SongFun;