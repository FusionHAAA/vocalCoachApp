import React from 'react';
import { Link } from 'react-router-dom'

function NavBar(props) {
    return (
        <nav>
            <div>
                <Link to="/TestAudio">
                    Test Audio
                </Link>
            </div>
            <div>
                <Link to="/ChooseSong">
                    Choose Song
                </Link>
            </div>
            <div>
                {/* <Link to="/SongList">
                    About
                </Link> */}
            </div>
        </nav>
    );
}

export default NavBar;