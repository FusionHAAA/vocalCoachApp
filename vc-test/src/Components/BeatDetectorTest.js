import React from 'react';
import { analyze } from 'web-audio-beat-detector';

function BeatDetectorTest(props) {


    var request = new XMLHttpRequest();
    //console.log('sent request')
      request.open('GET',"https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3",true)
    
      request.responseType = 'arraybuffer';

      request.onload = function(e) {
        
        console.log(this,e,request)
        analyze(this.response)
        .then((tempo) => {
            // the tempo could be analyzed
            console.log(tempo)
        })
        .catch((err) => {
            console.log(err)
            // something went wrong
        });
  
      };
    request.send();
   




    return (
        <div>
            {'hello WOrld'}
        </div>
    );
}

export default BeatDetectorTest;