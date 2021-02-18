
function createBuffers(url) {

  // Fetch Audio Track via AJAX with URL
  var request = new XMLHttpRequest();
 
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';
 
  request.onload = function(ajaxResponseBuffer) {
 
     // Create and Save Original Buffer Audio Context in 'originalBuffer'
     var audioCtx = new AudioContext();
     var songLength = ajaxResponseBuffer.total;
 
     // Arguments: Channels, Length, Sample Rate
     var offlineCtx = new OfflineAudioContext(1, songLength, 44100);
     var audioData = request.response;
     audioCtx.decodeAudioData(audioData, function(buffer) {
 
          window.originalBuffer = buffer.getChannelData(0);
          var beatSample = offlineCtx.createBufferSource();
          beatSample.buffer = buffer;
 
          // Create a Low Pass Filter to Isolate Low End Beat
          var filter = offlineCtx.createBiquadFilter();
          filter.type = "lowpass";
          filter.frequency.value = 140;
          beatSample.connect(filter);
          filter.connect(offlineCtx.destination);
 
             // Render this low pass filter data to new Audio Context and Save in 'lowPassBuffer'
             offlineCtx.startRendering().then(function(lowPassAudioBuffer) {
 
              var audioCtx = new(window.AudioContext || window.webkitAudioContext)();
              var song = audioCtx.createBufferSource();
              song.buffer = lowPassAudioBuffer;
              song.connect(audioCtx.destination);
 
              // Save lowPassBuffer in Global Array
              window.lowPassBuffer = song.buffer.getChannelData(0);
              console.log("Low Pass Buffer Rendered!");
             });
 
         },
         function(e) {});
  }
  request.send();
 }
 

function getClip(length, startTime, data) {

  var clip_length = length * 44100;
  var section = startTime * 44100;
  var newArr = [];

  for (var i = 0; i < clip_length; i++) {
     newArr.push(data[section + i]);
  }

  return newArr;
}

//Down-sample the clip
function getSampleClip(data, samples) {

  var newArray = [];
  var modulus_coefficient = Math.round(data.length / samples);

  for (var i = 0; i < data.length; i++) {
     if (i % modulus_coefficient == 0) {
         newArray.push(data[i]);
     }
  }
  return newArray;
}


//Normalize the array of data returned from the down sample
function normalizeArray(data) {

  var newArray = [];
 
  for (var i = 0; i < data.length; i++) {
      newArray.push(Math.abs(Math.round((data[i + 1] - data[i]) * 1000)));
  }
 
  return newArray;
 }

 function countFlatLineGroupings(data) {

  var groupings = 0;
  var newArray = normalizeArray(data);
 
  function getMax(a) {
     var m = -Infinity,
         i = 0,
         n = a.length;
 
     for (; i != n; ++i) {
         if (a[i] > m) {
             m = a[i];
         }
     }
     return m;
  }
 
  function getMin(a) {
     var m = Infinity,
         i = 0,
         n = a.length;
 
     for (; i != n; ++i) {
         if (a[i] < m) {
             m = a[i];
         }
     }
     return m;
  }
 
  var max = getMax(newArray);
  var min = getMin(newArray);
  var count = 0;
  var threshold = Math.round((max - min) * 0.2);
 
  for (var i = 0; i < newArray.length; i++) {
 
    if (newArray[i] > threshold && newArray[i + 1] < threshold && newArray[i + 2] < threshold && newArray[i + 3] < threshold && newArray[i + 6] < threshold) {
         count++;
     }
  }
 
  return count;
 }
 