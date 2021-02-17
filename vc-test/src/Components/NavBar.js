import React from 'react';
import { Link } from 'react-router-dom'

function NavBar(props) {
    return (
        <nav>
            <div className="nav-links">
                <Link to="/">
                    <b>Home</b>
                </Link>
            </div>
            <div className="nav-links">
                <Link to="/TestAudio">
                    <b>Test Audio</b>
                </Link>
            </div>
            <div className="nav-links">
                <Link to="/ChooseSong">
                    <b>Choose Song</b>
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;