import React from 'react';
import { Link } from 'react-router-dom'

function NavBar(props) {
    return (
        <nav className="container-textIn">
            
            <div className="nav-links">
                <Link to="/" alt="Home">
                    <b>Home</b>
                </Link>
            </div>
            <div className="nav-links">
                <Link to="/ChooseSong" alt="Choose Song">
                    <b>Choose Song</b>
                </Link>
            </div>
            <div className="nav-links">
                <Link to="/SongFun" alt="Song Fun">
                    <b>Customize</b>
                </Link>
            </div>
            <div className="nav-links">
                <Link to="/TestAudio" alt="Test Audio">
                    <b>Test Audio</b>
                </Link>
            </div>       
        </nav>
    );
}

export default NavBar;