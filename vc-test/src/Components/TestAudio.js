import React,{useState,useEffect} from "react";
import firstSong from '../assets/CallMe.mp3'
import secondSong from '../assets/tiktok.mp3'
import lamejs from 'lamejs';
import token from "./Token.js";

function TestAudio(props) {
  let [convertFirstSong,setConvertFirstSong] = useState(firstSong)
  let [convertSecondSong,setConvertSecondSong] = useState(secondSong)


 
  let [startingTime1,setStartingTime1] = useState(0)
  let [startingTime2,setStartingTime2] = useState(0)
  
 

  const demonMagic = () => {
    //////
   
    document.getElementById('transpose').innerHTML = '...loading'


    const MAX_FRAME_LENGTH = 16000;
    var gInFIFO = new Array(MAX_FRAME_LENGTH).fill(0.0);
    var gOutFIFO = new Array(MAX_FRAME_LENGTH).fill(0.0);
    var gFFTworksp = new Array(2 * MAX_FRAME_LENGTH).fill(0.0);
    var gLastPhase = new Array(MAX_FRAME_LENGTH / 2 + 1).fill(0.0);
    var gSumPhase = new Array(MAX_FRAME_LENGTH / 2 + 1).fill(0.0);
    var gOutputAccum = new Array(2 * MAX_FRAME_LENGTH).fill(0.0);
    var gAnaFreq = new Array(MAX_FRAME_LENGTH).fill(0.0);
    var gAnaMagn = new Array(MAX_FRAME_LENGTH).fill(0.0);
    var gSynFreq = new Array(MAX_FRAME_LENGTH).fill(0.0);
    var gSynMagn = new Array(MAX_FRAME_LENGTH).fill(0.0);
    var gRover = 0;
    var AudioContext = window.AudioContext;
    var audioCtx = new AudioContext();
    // var offlineCtx= new OfflineAudioContext(1,44100*4,44100);
    
//immediately grab audio on load 
//transpose
//
//load it into one audio player
function getPeaks(data) {


  var partSize = 22050,
      parts = data[0].length / partSize,
      peaks = [];

  for (var i = 0; i < parts; i++) {
    var max = 0;
    for (var j = i * partSize; j < (i + 1) * partSize; j++) {
      var volume = Math.max(Math.abs(data[0][j]), Math.abs(data[1][j]));
      if (!max || (volume > max.volume)) {
        max = {
          position: j,
          volume: volume
        };
      }
    }
    peaks.push(max);
  }



  peaks.sort(function(a, b) {
    return b.volume - a.volume;
  });



  peaks = peaks.splice(0, peaks.length * 0.5);



  peaks.sort(function(a, b) {
    return a.position - b.position;
  });

  return peaks;
}
//get the keys 
//set each transpose value to their difference/2
//get the bpm
//bpmfirst song / bpm of second =playbackrate second song

    function loadTheTrack(song,num) {
      
   const getDesiredKey=()=>{
     return (Math.abs(((props.songIdOne.key)-(props.songIdTwo.key))/2))
   } 
   getDesiredKey()
      
      var request = new XMLHttpRequest();
      //console.log('sent request')
        request.open('GET',song,true)
      
        request.responseType = 'arraybuffer';

        request.onload = function() {
          
          // Create offline context
        var OfflineContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
        var offlineContext = new OfflineContext(2, 30 * 44100, 44100);
          let copyOfData = request.response.slice(0);
        offlineContext.decodeAudioData(request.response, function(buffer) {

          // Create buffer source
          var source = offlineContext.createBufferSource();
          source.buffer = buffer;

          // Beats, or kicks, generally occur around the 100 to 150 hz range.
          // Below this is often the bassline.  So let's focus just on that.

          // First a lowpass to remove most of the song.

          var lowpass = offlineContext.createBiquadFilter();
          lowpass.type = "lowpass";
          lowpass.frequency.value = 150;
          lowpass.Q.value = 1;

          // Run the output of the source through the low pass.

          source.connect(lowpass);

          // Now a highpass to remove the bassline.

          var highpass = offlineContext.createBiquadFilter();
          highpass.type = "highpass";
          highpass.frequency.value = 100;
          highpass.Q.value = 1;

          // Run the output of the lowpass through the highpass.

          lowpass.connect(highpass);

          // Run the output of the highpass through our offline context.

          highpass.connect(offlineContext.destination);

          // Start the source, and render the output into the offline conext.

          source.start(0);
          offlineContext.startRendering();
        });

        offlineContext.oncomplete = function(e) {
          var buffer = e.renderedBuffer;
          var peaks = getPeaks([buffer.getChannelData(0), buffer.getChannelData(1)]);
         

          console.log((30*(peaks[0].position))/buffer.getChannelData(0).length)

          if(num===1){
          setStartingTime1((30*(peaks[0].position))/buffer.getChannelData(0).length); 
          }else{
          setStartingTime2((30*(peaks[0].position))/buffer.getChannelData(0).length); 
          }
         
         
        };


          audioCtx.decodeAudioData(
            copyOfData,
            (decodedData) => {
              var in_data_l = decodedData.getChannelData(0);
              
              var in_data_r = decodedData.getChannelData(1);


              let shiftFactor = document.getElementById('shiftAmount').value
              let shiftAmount = Math.pow(Math.pow(2, 1 / 12), shiftFactor);
              console.log(0)
              in_data_l = PitchShift(
                shiftAmount,
                in_data_l.length,
                1024,
                10,
                audioCtx.sampleRate,
                in_data_l
              );

              console.log(1)
              //console.log('...still transposing');
              in_data_r = PitchShift(
                shiftAmount,
                in_data_l.length,
                1024,
                10,
                audioCtx.sampleRate,
                in_data_r
              );
              console.log(2)
             
              decodedData.copyToChannel(in_data_l, 0);
              console.log(3)
              
              decodedData.copyToChannel(in_data_r, 1);
              console.log(4)
              var source = audioCtx.createBufferSource(); // creates a sound source
              source.buffer = decodedData; // tell the source which sound to play
                
              source.connect(audioCtx.destination); // connect the source to the context's destination (the speakers)
              //console.log('ready to convert')
              //console.log(source.buffer)
              //setSongConvert(source.buffer)
              convertFile(source.buffer,num)
            },
            (e) => {
              alert(
                "Sorry you picked an unavliable song"
              );
            }
          );
        };
      request.send();
     
    }


    function PitchShift(
      /* float[*/ pitchShift,
      /* long */ numSampsToProcess,
      /* long */ fftFrameSize,
      /* long */ osamp,
      /* float[*/ sampleRate,
      /* float[] */ indata
    ) {
      /* double */ var magn, phase, tmp, window, real, imag;
      /* double */ var freqPerBin, expct;
      /* long */ var i, k, qpd, index, inFifoLatency, stepSize, fftFrameSize2;

      /* float[] */ var outdata = indata;
      /* set up some handy variables */
      fftFrameSize2 = Math.trunc(fftFrameSize / 2);
      stepSize = Math.trunc(fftFrameSize / osamp);
      freqPerBin = sampleRate / /* (double) */ fftFrameSize;
      expct =
        (2.0 * Math.PI * /* (double) */ stepSize) / /* (double) */ fftFrameSize;
      inFifoLatency = Math.trunc(fftFrameSize - stepSize);
      if (gRover == 0) gRover = inFifoLatency;

      /* main processing loop */
      for (i = 0; i < numSampsToProcess; i++) {
        /* As long as we have not yet collected enough data just read in */
        gInFIFO[gRover] = indata[i];
        outdata[i] = gOutFIFO[gRover - inFifoLatency];
        gRover++;

        /* now we have enough data for processing */
        if (gRover >= fftFrameSize) {
          gRover = inFifoLatency;

          /* do windowing and re,im interleave */
          for (k = 0; k < fftFrameSize; k++) {
            window =
              -0.5 *
                Math.cos(
                  (2.0 * Math.PI * /* (double) */ k) /
                    /* (double) */ fftFrameSize
                ) +
              0.5;
            gFFTworksp[2 * k] = /* (float) */ gInFIFO[k] * window;
            gFFTworksp[2 * k + 1] = 0.0;
          }

          /* ***************** ANALYSIS ******************* */
          /* do transform */
          ShortTimeFourierTransform(gFFTworksp, fftFrameSize, -1);

          /* this is the analysis step */
          for (k = 0; k <= fftFrameSize2; k++) {
            /* de-interlace FFT buffer */
            real = gFFTworksp[2 * k];
            imag = gFFTworksp[2 * k + 1];

            /* compute magnitude and phase */
            magn = 2.0 * Math.sqrt(real * real + imag * imag);
            phase = Math.atan2(imag, real);

            /* compute phase difference */
            tmp = phase - gLastPhase[k];
            gLastPhase[k] = /* (float) */ phase;

            /* subtract expected phase difference */
            tmp -= /* (double) */ k * expct;

            /* map delta phase into +/- Pi interval */
            qpd = /* (long) */ Math.trunc(tmp / Math.PI);
            if (qpd >= 0) qpd += qpd & 1;
            else qpd -= qpd & 1;
            tmp -= Math.PI * /* (double) */ qpd;

            /* get deviation from bin frequency from the +/- Pi interval */
            tmp = (osamp * tmp) / (2.0 * Math.PI);

            /* compute the k-th partials' true frequency */
            tmp = /* (double) */ k * freqPerBin + tmp * freqPerBin;

            /* store magnitude and true frequency in analysis arrays */
            gAnaMagn[k] = /* (float) */ magn;
            gAnaFreq[k] = /* (float) */ tmp;
          }

          /* ***************** PROCESSING ******************* */
          /* this does the actual pitch shifting */
          for (var zero = 0; zero < fftFrameSize; zero++) {
            gSynMagn[zero] = 0;
            gSynFreq[zero] = 0;
          }

          for (k = 0; k <= fftFrameSize2; k++) {
            index = /* (long) */ Math.trunc(k * pitchShift);
            if (index <= fftFrameSize2) {
              gSynMagn[index] += gAnaMagn[k];
              gSynFreq[index] = gAnaFreq[k] * pitchShift;
            }
          }

          /* ***************** SYNTHESIS ******************* */
          /* this is the synthesis step */
          for (k = 0; k <= fftFrameSize2; k++) {
            /* get magnitude and true frequency from synthesis arrays */
            magn = gSynMagn[k];
            tmp = gSynFreq[k];

            /* subtract bin mid frequency */
            tmp -= /* (double) */ k * freqPerBin;

            /* get bin deviation from freq deviation */
            tmp /= freqPerBin;

            /* take osamp into account */
            tmp = (2.0 * Math.PI * tmp) / osamp;

            /* add the overlap phase advance back in */
            tmp += /* (double) */ k * expct;

            /* accumulate delta phase to get bin phase */
            gSumPhase[k] += /* (float) */ tmp;
            phase = gSumPhase[k];

            /* get real and imag part and re-interleave */
            gFFTworksp[2 * k] = /* (float) */ magn * Math.cos(phase);
            gFFTworksp[2 * k + 1] = /* (float) */ magn * Math.sin(phase);
          }

          /* zero negative frequencies */
          for (k = fftFrameSize + 2; k < 2 * fftFrameSize; k++)
            gFFTworksp[k] = 0.0;

          /* do inverse transform */
          ShortTimeFourierTransform(gFFTworksp, fftFrameSize, 1);

          /* do windowing and add to output accumulator */
          for (k = 0; k < fftFrameSize; k++) {
            window =
              -0.5 *
                Math.cos(
                  (2.0 * Math.PI * /* (double) */ k) /
                    /* (double) */ fftFrameSize
                ) +
              0.5;
            gOutputAccum[k] +=
              /* (float) */ (2.0 * window * gFFTworksp[2 * k]) /
              (fftFrameSize2 * osamp);
          }
          for (k = 0; k < stepSize; k++) gOutFIFO[k] = gOutputAccum[k];

          /* shift accumulator */
          //memmove(gOutputAccum, gOutputAccum + stepSize, fftFrameSize * sizeof(float));
          for (k = 0; k < fftFrameSize; k++) {
            gOutputAccum[k] = gOutputAccum[k + stepSize];
          }

          /* move input FIFO */
          for (k = 0; k < inFifoLatency; k++)
            gInFIFO[k] = gInFIFO[k + stepSize];
        }
      }
      return outdata;
    }

    function ShortTimeFourierTransform(
      /* float[] */ fftBuffer,
      /* long */ fftFrameSize,
      /* long */ sign
    ) {
      /* float */ var wr, wi, arg, temp;
      /* float */ var tr, ti, ur, ui;
      /* long */ var i, bitm, j, le, le2, k;

      for (i = 2; i < 2 * fftFrameSize - 2; i += 2) {
        for (bitm = 2, j = 0; bitm < 2 * fftFrameSize; bitm <<= 1) {
          if ((i & bitm) != 0) j++;
          j <<= 1;
        }
        if (i < j) {
          temp = fftBuffer[i];
          fftBuffer[i] = fftBuffer[j];
          fftBuffer[j] = temp;
          temp = fftBuffer[i + 1];
          fftBuffer[i + 1] = fftBuffer[j + 1];
          fftBuffer[j + 1] = temp;
        }
      }
      /* long */ var max = /* (long) */ Math.trunc(
        Math.log(fftFrameSize) / Math.log(2.0) + 0.5
      );
      for (k = 0, le = 2; k < max; k++) {
        le <<= 1;
        le2 = le >> 1;
        ur = 1.0;
        ui = 0.0;
        arg = /* (float) */ Math.PI / (le2 >> 1);
        wr = /* (float) */ Math.cos(arg);
        wi = /* (float) */ sign * Math.sin(arg);
        for (j = 0; j < le2; j += 2) {
          for (i = j; i < 2 * fftFrameSize; i += le) {
            tr = fftBuffer[i + le2] * ur - fftBuffer[i + le2 + 1] * ui;
            ti = fftBuffer[i + le2] * ui + fftBuffer[i + le2 + 1] * ur;
            fftBuffer[i + le2] = fftBuffer[i] - tr;
            fftBuffer[i + le2 + 1] = fftBuffer[i + 1] - ti;
            fftBuffer[i] += tr;
            fftBuffer[i + 1] += ti;
          }
          tr = ur * wr - ui * wi;
          ui = ur * wi + ui * wr;
          ur = tr;
        }
      }
    }
    console.log(props.songOne,props.songTwo)

    loadTheTrack(props.songOne,1);
    loadTheTrack(props.songTwo,2);
    
    

   
  };

  

  const convertFile = (stuffToConvert,num)=> {
    
    function audioBufferToWav(aBuffer) {
      let numOfChan = aBuffer.numberOfChannels,
          btwLength = aBuffer.length * numOfChan * 2 + 44,
          btwArrBuff = new ArrayBuffer(btwLength),
          btwView = new DataView(btwArrBuff),
          btwChnls = [],
          btwIndex,
          btwSample,
          btwOffset = 0,
          btwPos = 0;
      setUint32(0x46464952); // "RIFF"
      setUint32(btwLength - 8); // file length - 8
      setUint32(0x45564157); // "WAVE"
      setUint32(0x20746d66); // "fmt " chunk
      setUint32(16); // length = 16
      setUint16(1); // PCM (uncompressed)
      setUint16(numOfChan);
      setUint32(aBuffer.sampleRate);
      setUint32(aBuffer.sampleRate * 2 * numOfChan); // avg. bytes/sec
      setUint16(numOfChan * 2); // block-align
      setUint16(16); // 16-bit
      setUint32(0x61746164); // "data" - chunk
      setUint32(btwLength - btwPos - 4); // chunk length
  
      for (btwIndex = 0; btwIndex < aBuffer.numberOfChannels; btwIndex++)
          btwChnls.push(aBuffer.getChannelData(btwIndex));
  
      while (btwPos < btwLength) {
          for (btwIndex = 0; btwIndex < numOfChan; btwIndex++) {
              // interleave btwChnls
              btwSample = Math.max(-1, Math.min(1, btwChnls[btwIndex][btwOffset])); // clamp
              btwSample = (0.5 + btwSample < 0 ? btwSample * 32768 : btwSample * 32767) | 0; // scale to 16-bit signed int
              btwView.setInt16(btwPos, btwSample, true); // write 16-bit sample
              btwPos += 2;
          }
          btwOffset++; // next source sample
      }
      let wavHdr = lamejs.WavHeader.readHeader(new DataView(btwArrBuff));
      let wavSamples = new Int16Array(btwArrBuff, wavHdr.dataOffset, wavHdr.dataLen / 2);
    

      let data = new Int16Array(btwArrBuff, wavHdr.dataOffset, wavHdr.dataLen / 2);
      let leftData = [];
      let rightData = [];
      for (let i = 0; i < data.length; i += 2) {
                   leftData.push(data[i]);
                   rightData.push(data[i + 1]);
      }
      var left = new Int16Array(leftData);
      var right = new Int16Array(rightData);



      wavToMp3(wavHdr.channels, wavHdr.sampleRate, wavSamples,left,right);
  
      function setUint16(data) {
          btwView.setUint16(btwPos, data, true);
          btwPos += 2;
      }
  
      function setUint32(data) {
          btwView.setUint32(btwPos, data, true);
          btwPos += 4;
      }
    }
  
  
  
    function wavToMp3(channels, sampleRate, samples,left,right) {
      var buffer = [];
      var mp3enc = new lamejs.Mp3Encoder(channels, sampleRate, 128);
      var remaining = samples.length;
      var samplesPerFrame = 1152;
      for (var i = 0; remaining >= samplesPerFrame; i += samplesPerFrame) {
        var leftChunk = left.subarray(i, i + samplesPerFrame);
        var rightChunk = right.subarray(i, i + samplesPerFrame);
          var mp3buf = mp3enc.encodeBuffer(leftChunk, rightChunk);
          if (mp3buf.length > 0) {
              buffer.push(new Int8Array(mp3buf));
          }
          remaining -= samplesPerFrame;
      }
      var d = mp3enc.flush();
      if(d.length > 0){
          buffer.push(new Int8Array(d));
      }
  
      var mp3Blob = new Blob(buffer, {type: 'audio/mp3'});
      var bUrl = window.URL.createObjectURL(mp3Blob);

      if(num===1){
        loadFirst(bUrl)
      }else{
        loadSecond(bUrl)
      }

      

      console.log('conversionDone')
  
  }
 
  audioBufferToWav(stuffToConvert)

  }

  const loadFirst = (x)=> {
    document.getElementById('transpose').innerHTML= 'READY'
    document.getElementById('pba-two').style.animation = 'smallScale 3s infinite'
    document.getElementById('play-triangle').style.color = 'rgb(253, 85, 85)'
    setConvertFirstSong(x)
    
  }

  const loadSecond =(x)=> {
    setConvertSecondSong(x)
  }

  const playBoth= () => {
    document.getElementById('first').play()
    document.getElementById('second').play()
  }

  const pauseBoth= () => {
    document.getElementById('first').pause()
    document.getElementById('second').pause()
  }

  const stopBoth=() => {
    pauseBoth();
    console.log(startingTime1)
    document.getElementById('first').currentTime=startingTime1
    document.getElementById('second').currentTime = startingTime2
  }


  const showButton =()=> {
    return (
      <button className="transpose" onClick={demonMagic} id="transpose">
      Transpose
     </button>

    )
  }
 
 

  return (
    <div id="wrapper">
      <input id="shiftAmount" type="text" defaultValue="0" style={{display:'none'}}/>
      <button className="transpose" onClick={demonMagic} id="transpose">
       Transpose
      </button>
      {/* {showButton()} */}
     
      <audio id='first' src={convertFirstSong}></audio>
      <audio id='second' src={convertSecondSong}></audio>

      <div>
      {/* <button onClick={playBoth}>PLAY</button>
      <button onClick={pauseBoth}>PAUSE</button>
      <button onClick={stopBoth}>STOP</button> */}
      </div>
      
    </div>
  );
}

export default TestAudio;
//D minor = F major tik tok 
//G major Call me maybe