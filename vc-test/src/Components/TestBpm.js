import React, {useState,useEffect,useRef} from 'react';
import soundCheck from '../assets/Cmajor.mp3'




function TestBpm(props) {


    const [speed,setSpeed] =useState(1.0);

    const audioRef = useRef();

    useEffect(()=>{
        setPlayBack();
    })

    const setPlayBack = ()=>{
        audioRef.current.playbackRate = speed
     
    }

    const increment = () => {
        setSpeed(speed+0.1)
        setPlayBack();
    }
   
    const superSlow = () => {
        setSpeed(0.1)
        
        setPlayBack();
    }

   


    return (
        <div>
            <audio ref={audioRef} id='soundmp' controls src={soundCheck}>

            </audio>
            <button onClick={increment}>+</button>
            <button onClick={superSlow}>mega -</button>

        </div>
    );
}

export default TestBpm;