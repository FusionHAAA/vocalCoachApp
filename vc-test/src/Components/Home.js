import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import SongList from './SongList.js'

function Home(props) {
    return (
        <div>
            <div>
                <Link to="/TestAudio">
                    Test Audio
                </Link>
            </div>
            <SongList />
        </div>
    );
}

export default Home;