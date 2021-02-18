


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
 