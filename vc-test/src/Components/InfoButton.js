
import React from 'react';
import {useState, useEffect} from 'react';
import buttonImage from '../images/Info-Button.svg';

function InfoButton(props) {

    const infoButtonStyle={
        height: '5vh',
        width: 'auto'
        }

    let infoContainer={
        position: 'absolute',
        bottom: '0',
        right: '0'
    }

    const infoGraphicStyle={
        position: 'absolute',
        zIndex: '500',
        borderRadius: '20px',
        backgroundColor: 'white',
        color: 'black',
        height: '100%',
        width: '100%',
        boxShadow: '10px 10px 10px rgba(0,0,0,.9)'

    }

    const textStyle = {
        padding: '5%',
        fontSize: 'x-large'
    }

    const buttonStyle = {
        borderRadius:'0px 100px / 100px',
        backgroundColor:"rgb(46,139,87)",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',   
        width: '45%'
    }

    const centerButton = {
        display: 'flex',
        justifyContent: 'center',
        height: '15%'
    }
    const displayInfo=()=>{


        const infoGraphic= 
        <div style={infoGraphicStyle}>
        <p style={textStyle}>
        Click the album to hear Harry Styles sing incredibly high 
        or listen to Doja cat sing incredibly low. <br></br><br></br>
        Click the play button at the bottom to hear the two songs Mused together
        </p>
        <div style={centerButton}>
        <div onClick={removeInfo} style={buttonStyle}><b>OK!</b></div>
        </div>
        </div>
        
      

        setInfo(infoGraphic)
       
    }

    const removeInfo=()=>{
        setInfo()
    }

  

    const infoButtonElement = <img alt="info button" style={infoButtonStyle} src={buttonImage}></img>

    const [info,setInfo]= useState();
   


    return (
        <>
         {info}
        <div style={infoContainer} onClick={displayInfo}>
            {infoButtonElement}
            
        </div>
        </>
    );
}

export default InfoButton;