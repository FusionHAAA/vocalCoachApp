import React from "react";
import soundCheck from "../assets/Mala Nota.mp3";

function TestAudio(props) {
  let audio1 = document.getElementById("firstSong");
  let audio2 = document.getElementById("secondSong");

  const pressPlay1 = () => {
    audio1.play();
  };

  const stopMusic1 = () => {
    audio1.pause();
  };

  const pressPlay2 = () => {
    audio2.play();
  };

  const stopMusic2 = () => {
    audio2.pause();
  };

  const playBoth = () => {
    audio1.play();
    audio2.play();
  };

  const stopBoth = () => {
    audio1.pause();
    audio2.pause();
  };

  //     const audio = new Audio("../assets/Mala Nota.mp3");
  //     audio.loop = true;
  //     audio.crossOrigin = "anonymous";
  //     audio.play();
  //     console.log(audio);

  //     const ctx = new (window.AudioContext || window.webkitAudioContext)();
  //     const stream_dest = ctx.createMediaStreamDestination();
  //     const source = ctx.createMediaElementSource(audio);
  //     source.connect(stream_dest);

  //     const stream = stream_dest.stream;
  //     let receiver = document.getElementById("receiver");
  //     // feed our visible receiver with this stream
  //     receiver.srcObject = stream;
  //     console.log(stream.toString());
  //   };

  //   stream.addTrack()
  //   let source = audioCtx.createMediaStreamSource(stream);
  //   source.connect(analyser);

  // analyser.connect(output);
  //   analyser.fftSize = 2048;
  //   let bufferLength = analyser.frequencyBinCount;
  //   let dataArray = new Uint8Array(bufferLength);
  //   analyser.getByteTimeDomainData(dataArray);
  //   let canvas = document.querySelector("canvas");
  //   let ctx = canvas.getContext("2d");

  //   let drawVisual = null;

  //   function draw() {
  //     ctx.fillStyle = "rgb(200, 200, 200)";
  //     ctx.fillRect(0, 0, canvas.width, canvas.height);
  //     drawVisual = requestAnimationFrame(draw);
  //   }

  //   draw();

  return (
    <div className="music-box">
      <h1>Wave-Form</h1>
      <canvas id="wave" width="500" height="300"></canvas>
      <div className="controls">
        <div className="buttons">
          <button onClick={pressPlay1}>Play1</button>
          <button onClick={stopMusic1}>Stop1</button>
        </div>
        <div className="buttons">
          <button onClick={pressPlay2}>Play2</button>
          <button onClick={stopMusic2}>Stop2</button>
        </div>
      </div>
      <div className="buttons">
        <button onClick={playBoth}>Play Both</button>
        <button onClick={stopBoth}>Stop Both</button>
      </div>
      <audio id="firstSong" src={soundCheck}></audio>
    </div>
  );
}

export default TestAudio;
