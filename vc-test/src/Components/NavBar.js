import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import TheContext from '../TheContext'

function NavBar(props) {

    const { userChoice1, setUserChoice1, userChoice2, setUserChoice2 } = React.useContext(
        TheContext
      );

console.log(userChoice1)


console.log(userChoice2)


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
            <Link  to={{
                            pathname: "/SongFun",
                            spotifyInfo: {
                                artist1: `${userChoice1.artist1}`,
                                title1: `${userChoice1.title1}`,
                                albumTitle1: `${userChoice1.albumTitle1}`,
                                albumArt1: `${userChoice1.albumArt1}`,
                                artist2: `${userChoice2.artist2}`,
                                title2: `${userChoice2.title2}`,
                                albumTitle2: `${userChoice2.albumTitle2}`,
                                albumArt2: `${userChoice2.albumArt2}`,
                                processSong1: `${userChoice1.processSong1}`,
                                processSong2: `${userChoice2.processSong2}`
                            }
                         }} className="customize-button-btn">
                    <b>Customize</b>
                </Link>
            </div> 
        </nav>
    );
}

export default NavBar;