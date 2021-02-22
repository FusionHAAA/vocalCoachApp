import React from 'react';
import pavlov from '../assets/Mala Nota.mp3'
import pavlov2 from '../assets/Croqueta.mp3'

function AudioCanvas(props) {
   function displayCanvas(){
        var audio;

        if(props.num===1){
        audio = document.getElementById("first");
        
        audio.crossOrigin= 'anonymous'
        audio.src= pavlov
        }else{
         audio = document.getElementById("second");
        
          audio.crossOrigin= 'anonymous'
          audio.src= pavlov2
        }
       
          var context = new AudioContext();
          var src = context.createMediaElementSource(audio);
          var analyser = context.createAnalyser();
      
          var canvas;

          if(props.num===1){
          canvas = document.getElementById("canvas1");
          }else{
            canvas = document.getElementById("canvas2");
          }
          console.log(canvas)
          var ctx = canvas.getContext("2d");
      
          src.connect(analyser);
          analyser.connect(context.destination);
      
          analyser.fftSize = 256;
      
          var bufferLength = analyser.frequencyBinCount;
          console.log(bufferLength);
      
          var dataArray = new Uint8Array(bufferLength);
      
          var WIDTH = canvas.width;
          var HEIGHT = canvas.height;
      
          var barWidth = (WIDTH / bufferLength) * 2.5;
          var barHeight;
          var x = 0;
      
          function renderFrame() {
            requestAnimationFrame(renderFrame);
      
            x = 0;
      
            analyser.getByteFrequencyData(dataArray);
      
            ctx.fillStyle = "#000";
            ctx.fillRect(0, 0, WIDTH, HEIGHT);
            
            
            
            for (var i = 0; i < bufferLength; i++) {
              barHeight = dataArray[i]*8;
              if(props.num===1){
                ///topcanvas
                // barHeight + (10 * (i/bufferLength));
              var b = 50 + (2 * (i/bufferLength))
              var g = 150 * (5 * (i/bufferLength));
              var r = 50;
              }else {

                ///bottom canvas
                // barHeight + (10 * (i/bufferLength));
              var r = 50 + (2 * (i/bufferLength))
              var g = 150 * (5 * (i/bufferLength));
              var b = 50;
              }
              ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
              ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
      
              x += barWidth + 1;
            }
          
          }
          audio.volume=0.01
          audio.loop = true;
          audio.play();
          renderFrame();
        };
      const oneOrTwo=()=>{
          if(props.num===1)
          {
            return (
            <div className="canvas-container">
            <canvas id="canvas1" onClick={displayCanvas}></canvas>
                <audio id='first'></audio>
                </div>)
          }else{
            return (
                <div className="canvas-container">
                  <canvas id="canvas2" onClick={displayCanvas}></canvas>
                  <audio id='second'></audio>
                </div>
                  )
          }
      }
      
    return (
             oneOrTwo()
    );
}

export default AudioCanvas;