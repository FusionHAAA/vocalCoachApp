import React from "react";
import soundCheck from "../assets/Mala Nota.mp3";
import soundCheck2 from "../assets/Croqueta.mp3";

function TestAudio(props) {
  /////////////////////////////
  //Equalizer for audio
  /////////////////////////////

  /////////////////////////////
  //Change Bpm and preserve key
  /////////////////////////////
  // const timeDemon = () => {

  //   function BPMTimeline(initialTempo) {

  //    initialTempo = initialTempo || 60;

  //     var tempoMarkers  = [];

  //     var formulas = {

  //       linear : {
  //         value : function(x0, x1, y0, y1, x) {
  //           // var c = (y1 - y0) / (x1-x0);
  //           // return y0 + c * (x-x0);
  //           // console.log([x0, x1, y0, y1, x])
  //           return y0 + (y1 - y0) * ((x - x0) / (x1 - x0));
  //         },

  //         integral: function(x0, x1, y0, y1, constant, x) {

  //           // Integral of the following function:
  //           // v(t) = V0 + (V1 - V0) * ((t - T0) / (T1 - T0))

  //           var dy  = y1 - y0;
  //           var dx  = x1 - x0;
  //           var M   = dy / dx;
  //           var C   = y0;

  //           return (M/2) * Math.pow((x - x0), 2) + C * (x - x0) + constant;
  //         },

  //         integral_inverse : function(x0, x1, y0, y1, constant, y) {

  //           var dx  = x1 - x0;
  //           var dy  = y1 - y0;
  //           var A   = 0.5 * (dy / dx);
  //           var B   = y0;
  //           var C   = constant;

  //           var square_root = Math.sqrt(B*B - 4*A*(C-y));
  //           var sol1 = (-B + square_root) / (2*A);
  //           var sol2 = (-B - square_root) / (2*A);

  //           if (sol1 >= 0)
  //             return sol1 + x0;
  //           else
  //             return sol2 + x0;
  //         }
  //       },

  //       exponential : {
  //         value : function(x0, x1, y0, y1, x) {

  //           return y0 * Math.exp(Math.log(y1/y0) * (x - x0) / (x1 - x0));
  //           // return y0 * Math.pow((y1/y0), (x-x0)/(x1-x0));
  //         },

  //         integral : function(x0, x1, y0, y1, constant, x) {

  //           var c = Math.log(y1/y0) / (x1-x0);
  //           var y = y0 * (Math.exp(c*(x-x0)) - 1) / c + constant;
  //           return y;

  //           /* For whatever reason, the calculations bellow do not work. o.O */
  //           // var ry = y1 / y0;
  //           // var a = y0 * Math.pow(ry, 1/(x1 - x0));
  //           // var b = ry;
  //           // var y = a * Math.pow(b, x - x0) / Math.log(b) + constant;
  //           // return res;

  //         },

  //         integral_inverse : function(x0, x1, y0, y1, constant, y) {

  //           var c = Math.log(y1/y0) / (x1-x0);
  //           var A = ((c / y0) * (y - constant)) + 1;
  //           var x = Math.log(A) / c + x0;
  //           return x;
  //         }
  //       },

  //       step : {
  //         value : function(x0, x1, y0, y1, x) {
  //           return (x < x1) ? y0 : y1;
  //         },

  //         integral : function(x0, x1, y0, y1, constant, x) {
  //           return y0 * (x - x0) + constant;
  //         },

  //         integral_inverse : function(x0, x1, y0, y1, constant, y) {
  //           return (y - constant) / y0 + x0;
  //         }
  //       }
  //     };

  //     var tempo_to_marker_period = bpm_to_beat_period;

  //     var marker_period_to_tempo = beat_period_to_bpm;

  //     // converter from beat to time
  //     this.time = function (beat) {

  //       if (tempoMarkers.length == 0)
  //         return beat * tempo_to_marker_period(initialTempo); // constant Tempo
  //       else {

  //         var idx = find_index(tempoMarkers, {endBeat: beat}, function(a, b) { return a.endBeat - b.endBeat; });
  //         var prevIdx = idx[0];
  //         var nextIdx = idx[1];
  //         var previousMarker, nextMarker;

  //         if (idx.length == 1) {
  //           previousMarker = tempoMarkers[prevIdx];
  //           nextMarker = tempoMarkers[nextIdx+1];
  //         } else if (prevIdx!=undefined && nextIdx!=undefined) {
  //           // In between
  //           previousMarker = tempoMarkers[prevIdx];
  //           nextMarker = tempoMarkers[nextIdx];
  //         } else if (prevIdx!=undefined && nextIdx==undefined) {
  //           // Before first
  //           previousMarker = tempoMarkers[prevIdx];
  //         } else if (prevIdx==undefined && nextIdx!=undefined) {
  //           // After last
  //           nextMarker = tempoMarkers[nextIdx];
  //         }

  //         if (!nextMarker) {
  //           var pEndBeat = previousMarker.endBeat;
  //           var pEndTempo= previousMarker.endTempo;
  //           return ((beat-pEndBeat) * tempo_to_marker_period(pEndTempo)) + previousMarker.total_time(pEndBeat);
  //         } else
  //           return nextMarker.total_time(beat);
  //       }
  //     }

  //     // converter from time to beat
  //     this.beat = function (time) {

  //       if (tempoMarkers.length == 0) // constant Tempo
  //         return time / tempo_to_marker_period(initialTempo);
  //       else {

  //         var idx = find_index(tempoMarkers, {endTime: time}, function(a, b) { return a.endTime - b.endTime; });
  //         var prevIdx = idx[0];
  //         var nextIdx = idx[1];
  //         var previousMarker, nextMarker;

  //         if (idx.length == 1) {
  //           previousMarker = tempoMarkers[prevIdx];
  //           nextMarker = tempoMarkers[nextIdx+1];
  //         } else if (prevIdx!=undefined && nextIdx!=undefined) {
  //           // In between
  //           previousMarker = tempoMarkers[prevIdx];
  //           nextMarker = tempoMarkers[nextIdx];
  //         } else if (prevIdx!=undefined && nextIdx==undefined) {
  //           // Before first
  //           previousMarker = tempoMarkers[prevIdx];
  //         } else if (prevIdx==undefined && nextIdx!=undefined) {
  //           // After last
  //           nextMarker = tempoMarkers[nextIdx];
  //         }

  //         if (!nextMarker) {
  //           var pEndTempo  = previousMarker.endTempo;
  //           var pEndTime = previousMarker.endTime;
  //           return ((time-pEndTime) / tempo_to_marker_period(pEndTempo)) + previousMarker.total_beats(pEndTime);
  //         } else
  //           return nextMarker.total_beats(time);

  //       }
  //     }

  //     this.tempo_at_beat = function(beat) {
  //       if (tempoMarkers.length == 0)
  //         return initialTempo;
  //       else {

  //         var idx = find_index(tempoMarkers, {endBeat: beat}, function(a, b) { return a.endBeat - b.endBeat; });
  //         var m;

  //         if (idx.length == 1) {
  //           m = tempoMarkers[idx[0]];
  //           return m.endTempo;
  //         } else {
  //           if (is_first(idx)){
  //             m = tempoMarkers[idx[1]];
  //           } else if (is_last(idx)) {
  //             m = tempoMarkers[tempoMarkers.length-1];
  //             return m.endTempo;
  //           } else if (is_inbetween(idx)) {
  //             m = tempoMarkers[idx[1]];
  //           } else
  //             throw "Bad beat value ("+beat+") @ BPMTimeline.tempo_at_beat.";

  //           // return marker_period_to_tempo(m.value_at_beat(beat));
  //           var b0 = (m.previous)? m.previous.endBeat : 0;
  //           var b1 = m.endBeat;
  //           var T0 = (m.previous)? m.previous.endTempo : initialTempo;
  //           var T1 = m.endTempo;
  //           return formulas[m.type].value(b0, b1, T0, T1, beat);
  //         }

  //       }
  //     }

  //     this.tempo_at_time = function(time) {
  //       if (tempoMarkers.length == 0)
  //         return initialTempo;
  //       else {

  //         var idx = find_index(tempoMarkers, {endTime: time}, function(a, b) { return a.endTime - b.endTime; });
  //         var m;

  //         if (idx.length == 1) {
  //           m = tempoMarkers[idx[0]];
  //           return m.endTempo;
  //         } else {
  //           if (is_first(idx)){
  //             m = tempoMarkers[idx[1]];
  //           } else if (is_last(idx)) {
  //             m = tempoMarkers[tempoMarkers.length-1];
  //             return m.endTempo;
  //           } else if (is_inbetween(idx)) {
  //             m = tempoMarkers[idx[1]];
  //           } else
  //             throw "Bad time value ("+beat+") @ BPMTimeline.tempo_at_time.";

  //           var t0 = (m.previous)? m.previous.endTime : 0;
  //           var t1 = m.endTime;
  //           var T0 = (m.previous)? m.previous.endTempo : initialTempo;
  //           var T1 = m.endTempo;
  //           return formulas[m.type].value(t0, t1, T0, T1, time);
  //         }

  //       }
  //     }

  //     // params: {endBeat, endTempo, type, customData}
  //     this.add_tempo_marker = function(params) {
  //       // TODO: one could use "time" instead of "beat" in the params object.
  //       var totalBeatsFn;
  //       var totalTimeFn;
  //       var valueAtBeatFn;

  //       if (formulas[params.type] != undefined) {

  //         totalBeatsFn = function (time) {

  //           var start = (this.previous)? this.previous.endBeat : 0;
  //           var startBeatPeriod =
  //             (this.previous)?
  //               tempo_to_marker_period(this.previous.endTempo) :
  //               tempo_to_marker_period(this.timeline.get_initial_tempo());

  //           var end = this.endBeat;
  //           var endBeatPeriod = tempo_to_marker_period(this.endTempo);

  //           var totalTimeAtStart;

  //           if (!this.previous) {
  //             totalTimeAtStart = 0;
  //           } else
  //             totalTimeAtStart = this.previous.endTime;

  //           var value = formulas[this.type].integral_inverse(start, end, startBeatPeriod, endBeatPeriod, totalTimeAtStart, time);

  //           return value;
  //         };

  //         totalTimeFn  = function (beats) {

  //           var start = (this.previous)? this.previous.endBeat : 0;
  //           var startBeatPeriod =
  //             (this.previous)?
  //               tempo_to_marker_period(this.previous.endTempo) :
  //               tempo_to_marker_period(this.timeline.get_initial_tempo());

  //           var end = this.endBeat;
  //           var endBeatPeriod = tempo_to_marker_period(this.endTempo);

  //           var totalTimeAtStart;

  //           if (!this.previous) {
  //             totalTimeAtStart = 0;
  //           } else
  //             totalTimeAtStart = this.previous.endTime;

  //           var value = formulas[this.type].integral(start, end, startBeatPeriod, endBeatPeriod, totalTimeAtStart, beats);

  //           return value;
  //         };

  //         valueAtBeatFn = function (beats) {

  //           var end = this.endBeat;
  //           var endBeatPeriod = tempo_to_marker_period(this.endTempo);
  //           var start = (this.previous)? this.previous.endBeat : 0;
  //           var startBeatPeriod = (this.previous)? tempo_to_marker_period(this.previous.endTempo) : tempo_to_marker_period(this.timeline.get_initial_tempo());

  //           var value = formulas[this.type].value(start, end, startBeatPeriod, endBeatPeriod, beats)

  //           return value;
  //         };

  //       } else {
  //         throw "Unsupported marker type (" + params.type + ") @ BPMTimeline.add_tempo_marker.";
  //       }

  //       var obj = {
  //         previous      : undefined,
  //         timeline      : this,
  //         type          : params.type,
  //         endBeat       : params.endBeat,
  //         endTempo      : params.endTempo,
  //         endTime       : undefined,
  //         total_beats   : totalBeatsFn,
  //         total_time    : totalTimeFn,
  //         value_at_beat : valueAtBeatFn,
  //         customData	  : params.customData
  //       };

  //       totalBeatsFn.bind(obj);
  //       totalTimeFn.bind(obj);
  //       valueAtBeatFn.bind(obj);

  //       if (tempoMarkers.length == 0) {
  //         tempoMarkers[0] = obj;
  //         refresh_end_times(0);
  //       }else {
  //         var idx = find_index(tempoMarkers, {endBeat: params.endBeat}, function(a, b) { return a.endBeat - b.endBeat; });

  //         if (idx.length > 1) {

  //           var prevIdx = idx[0];
  //           var nextIdx = idx[1];

  //           if (prevIdx != undefined && nextIdx == undefined) {
  //             // Insert after the last marker in the array.
  //             obj.previous = tempoMarkers[tempoMarkers.length-1];
  //             tempoMarkers[tempoMarkers.length] = obj;
  //             refresh_end_times(tempoMarkers.length-1);
  //           } else if (prevIdx == undefined && nextIdx != undefined) {
  //             // Insert before the first marker in the array.
  //             tempoMarkers[0].previous = obj;
  //             tempoMarkers.splice(0, 0, obj);
  //             refresh_end_times(0);
  //           } else if (prevIdx != undefined && nextIdx != undefined) {
  //             // Insert in between the markers in the array.
  //             tempoMarkers[nextIdx].previous = obj;
  //             obj.previous = tempoMarkers[prevIdx];
  //             tempoMarkers.splice(nextIdx, 0, obj);
  //             refresh_end_times(nextIdx);
  //           }

  //         } else
  //           throw "Illegal access to a tempo marker @ BPMTimeline.add_tempo_marker.";
  //       }

  //       _emit('add-tempo-marker', {
  //         newMarker: {
  //           endBeat : obj.endBeat,
  //           endTime : obj.endTime,
  //           endTempo: obj.endTempo,
  //           type    : obj.type,
  //           previous: (obj.previous)? {
  //                         endBeat: obj.previous.endBeat,
  //                         endTime: obj.previous.endTime,
  //                         endTempo: obj.previous.endTempo,
  //                         type: obj.previous.type
  //                       } : undefined
  //         }
  //       });
  //     }

  //     // params: {endBeat}
  //     this.remove_tempo_marker = function(params) {
  //       if (params.endBeat!=undefined) {
  //         var idx = find_index(tempoMarkers, {endBeat: params.endBeat}, function(a, b){ return a.endBeat - b.endBeat; });
  //         if (idx.length == 1) {
  //           var oldPreviousMarker = tempoMarkers[idx[0]].previous;
  //           var m = tempoMarkers[idx[0]];
  //           tempoMarkers.splice(idx[0], 1);
  //           if (tempoMarkers[idx[0]])
  //             tempoMarkers[idx[0]].previous = oldPreviousMarker;
  //           refresh_end_times(idx[0]);
  //           _emit('remove-tempo-marker', {
  //             oldMarker: {
  //               endBeat 	: m.endBeat,
  //               endTime 	: m.endTime,
  //               endTempo  	: m.endTempo,
  //               type    	: m.type,
  //               previous 	: (m.previous)? {
  //                         endBeat: m.previous.endBeat,
  //                         endTime: m.previous.endTime,
  //                         endTempo: m.previous.endTempo,
  //                         type: m.previous.type
  //                       } : undefined
  //             }
  //           });
  //         } else
  //           throw "Invalid endBeat";
  //       } else {
  //         throw "Invalid arguments";
  //       }
  //     }

  //     // params: {oldEndBeat, newEndTempo, newType, newEndBeat}
  //     this.change_tempo_marker = function(params) {

  //       if (!params || params.oldEndBeat == undefined)
  //         throw "Invalid arguments";

  //       var idx = find_index(tempoMarkers, {endBeat: params.oldEndBeat}, function(a, b){ return a.endBeat - b.endBeat; });

  //       if (idx.length == 1) {
  //         var m = tempoMarkers[idx[0]];

  //         var oldMarker = {
  //           endBeat : m.endBeat,
  //           endTime : m.endTime,
  //           endTempo: m.endTempo,
  //           type    : m.type,
  //           previous: (m.previous)? {
  //                         endBeat: m.previous.endBeat,
  //                         endTime: m.previous.endTime,
  //                         endTempo: m.previous.endTempo,
  //                         type: m.previous.type
  //                       } : undefined
  //         };

  //         m.endBeat  = (params.newEndBeat!=undefined)? params.newEndBeat : m.endBeat;
  //         m.endTempo = (params.newEndTempo!=undefined)? params.newEndTempo : m.endTempo;
  //         m.type     = (params.newType!=undefined && formulas[m.type])? params.newType : m.type;
  //         m.endTime  = undefined;

  //         if (params.oldEndBeat != params.newEndBeat)
  //           refresh_end_times(idx[0]);

  //         _emit('change-tempo-marker', {
  //           oldMarker: oldMarker,
  //           newMarker: {
  //             endBeat : m.endBeat,
  //             endTime : m.endTime,
  //             endTempo: m.endTempo,
  //             type    : m.type,
  //             previous: (m.previous)? {
  //                         endBeat: m.previous.endBeat,
  //                         endTime: m.previous.endTime,
  //                         endTempo: m.previous.endTempo,
  //                         type: m.previous.type
  //                       } : undefined
  //           }
  //         });
  //       } else
  //         throw "Invalid endBeat";

  //     }

  //     // params: {type, tempoFn, integralFn, inverseIntegralFn}
  //     this.add_tempo_function = function(params) {
  //       // TODO: include 'minTempoFn' and 'maxTempoFn'
  //       this.formulas[params.type] = {
  //         value: tempoFn,
  //         integral: integralFn,
  //         inverse_integral: inverseIntegralFn
  //       }
  //     }

  //     function refresh_end_times(index) {
  //       for (var i=index; i<tempoMarkers.length; i++) {
  //         var m = tempoMarkers[i];
  //         m.endTime = m.total_time(m.endBeat);
  //       }
  //     }

  //     this.get_markers = function() {
  //       var toReturn = new Array(tempoMarkers.length );
  //       for (var i=0; i<tempoMarkers.length; i++) {
  //         var m = tempoMarkers[i];
  //         var previous = undefined;
  //         if (m.previous) {
  //           previous = {
  //             endBeat : m.previous.endBeat,
  //             endTempo  : m.previous.endTempo,
  //             endTime : m.previous.endTime,
  //             type : m.previous.type
  //           };
  //         }
  //         var obj = {
  //           endBeat : m.endBeat,
  //           endTempo: m.endTempo,
  //           endTime : m.endTime,
  //           previous: previous,
  //           type    : m.type,
  //           customData: m.customData
  //         }
  //         toReturn[i] = obj;
  //       }
  //       return toReturn;
  //     }

  //     var get_marker = function(index) {
  //       var m = tempoMarkers[index];
  //       return {
  //         endBeat : m.endBeat,
  //         endTempo: m.endTempo,
  //         endTime : m.endTime,
  //         type    : m.type,
  //         customData: m.customData
  //       };
  //     }

  //     this.get_initial_tempo = function() {
  //       return initialTempo;
  //     }

  //     this.set_initial_tempo = function(newTempo) {
  //       initialTempo = newTempo;
  //       refresh_end_times(0);
  //     }

  //     /*
  //      * Given a beat index 'b0' and a step 'difB' (e.g.: beat 4, step 0.5),
  //      * returns the time period between [b0, b0+difB].
  //      * Useful function to return the time period of, for example, a segment
  //      * of 4 beats.
  //      */
  //     this.get_period = function(b0, difB) {
  //       // TODO: Test this function.
  //       var startTime = this.time(b0);
  //       var endTime   = this.time(b0 + difB);
  //       return endTime - startTime;
  //     }

  //     this.get_min_tempo = function(t0, t1, unit) {
  //       // TODO: Fix this function
  //       var minTempo = initialTempo;
  //       for (var i=0; i < beatsIndex.length; i++)
  //         if (minTempo > tempoMarkers[beatsIndex[i]+""].endTempo)
  //           maxTempo = tempoMarkers[beatsIndex[i]+""].endTempo;

  //       return minTempo;
  //     }

  //     this.get_max_tempo = function(t0, t1, unit) {
  //       // TODO: Fix this function
  //       var maxTempo = initialTempo;

  //       for (var i=0; i < tempoMarkers.length; i++)
  //         maxTempo = (maxTempo < tempoMarkers[i].endTempo)? tempoMarkers[i].endTempo : maxTempo;

  //       return maxTempo;
  //     }

  //     // helpers
  //     function bpm_to_beat_period(bpm) {
  //       return 60/bpm;
  //     }

  //     function beat_period_to_bpm(beatPeriod) {
  //       return 60/beatPeriod;
  //     }

  //     function is_last(idx) {
  //       return idx.length > 1 && idx[0]!=undefined && idx[1]==undefined;
  //     }

  //     function is_first(idx) {
  //       return idx.length > 1 && idx[0]==undefined && idx[1]!=undefined;
  //     }

  //     function is_inbetween(idx) {
  //       return idx.length > 1 && !is_first(idx) && !is_last(idx);
  //     }

  //     function find_index(values, target, compareFn) {
  //       if (values.length == 0 || compareFn(target,values[0]) < 0) {
  //         return [undefined, 0];
  //       }
  //       return modified_binary_search(values, 0, values.length - 1, target, compareFn);
  //     };

  //     function modified_binary_search(values, start, end, target, compareFn) {
  //       // if the target is bigger than the last of the provided values.
  //       if (start > end) { return [end, undefined]; }

  //       var middle = Math.floor((start + end) / 2);
  //       var middleValue = values[middle];

  //       if (compareFn(middleValue, target) < 0 && values[middle+1] && compareFn(values[middle+1], target) > 0)
  //         // if the target is in between the two halfs.
  //         return [middle, middle+1];
  //       else if (compareFn(middleValue, target) > 0)
  //         return modified_binary_search(values, start, middle-1, target, compareFn);
  //       else if (compareFn(middleValue, target) < 0)
  //         return modified_binary_search(values, middle+1, end, target, compareFn);
  //       else
  //         return [middle]; //found!
  //     }

  //     // events handling
  //     var _callbacks =  {
  //       "add-tempo-marker": {},
  //       "remove-tempo-marker": {},
  //       "edit-tempo-marker": {}
  //     };

  //     var _emit = function(evenType, data) {
  //       for (var ci in _callbacks[evenType])
  //         _callbacks[evenType][ci](data);
  //     }

  //     this.add_event_listener = function(observerID, eventType, callback) {

  //       // if (!eventType || _callbacks[eventType]==undefined)
  //       // 	throw "Unsupported event type";

  //       if (observerID!=undefined && _callbacks[eventType][observerID]!=undefined)
  //         throw "Illegal modification of callback";

  //       var __id = (observerID==undefined)? _id + "-associate-" + (_idCounter++) : observerID;
  //       _callbacks[eventType][__id] = callback;
  //       return __id;
  //     }

  //     this.remove_event_listener = function(observerID, eventType) {

  //       // if (!eventType || _callbacks[eventType]==undefined)
  //       // 	throw "Unsupported event type";

  //       delete _callbacks[eventType][observerID];
  //     }

  //   }

  // }

  //Transposes audio by a factor value
  //from 0.5 one octave down and 2 one ocatave up
  const demonMagic = () => {
    //////
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
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var audioCtx = new AudioContext();

    function loadTheTrack() {
      var input = document.createElement("input");
      input.type = "file";
      input.style = "display:none";
      input.onchange = function (e) {
        var file = e.target.files[0];
        console.log(file);
        var reader = new FileReader();
        reader.onload = function () {
          console.log("decoding audio data with" + this.result);
          document.getElementById("status").innerText =
            "Pitch Shifting (yeah it takes a min)....";
          audioCtx.decodeAudioData(
            this.result,
            (decodedData) => {
              var in_data_l = decodedData.getChannelData(0);
              console.log(in_data_l);
              var in_data_r = decodedData.getChannelData(1);
              console.log(in_data_r);
              let shiftFactor = document.getElementById("shiftAmount").value;
              let shiftAmount = Math.pow(Math.pow(2, 1 / 12), shiftFactor);
              console.log(shiftAmount);
              in_data_l = PitchShift(
                shiftAmount,
                in_data_l.length,
                1024,
                10,
                audioCtx.sampleRate,
                in_data_l
              );
              console.log(in_data_l);
              in_data_r = PitchShift(
                shiftAmount,
                in_data_l.length,
                1024,
                10,
                audioCtx.sampleRate,
                in_data_r
              );
              decodedData.copyToChannel(in_data_l, 0);
              decodedData.copyToChannel(in_data_r, 1);
              var source = audioCtx.createBufferSource(); // creates a sound source
              source.buffer = decodedData; // tell the source which sound to play
              source.connect(audioCtx.destination); // connect the source to the context's destination (the speakers)
              console.log("starting");
              document.getElementById("status").innerText = "Playing...";
              source.start(0); // play the source now
            },
            (e) => {
              alert(
                "Sorry this browser unable to download this file... try Chrome"
              );
            }
          );
        };
        reader.readAsArrayBuffer(file);
      };
      document.getElementById("wrapper").appendChild(input);
      input.click();
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
    loadTheTrack();
  };

  //Loading screen

  return (
    <div id="wrapper">
      <p>
        PitchShift factor value which is between 0.5 (one octave down) and 2.
        (one octave up)
      </p>
      <input id="shiftAmount" type="text" defaultValue=".5" />
      <button onClick={demonMagic}>
        Pick a file and then wait for the pitch shift to happen!{" "}
      </button>
      <p id="status">Waiting for you to pick file.</p>
    </div>
  );
}

export default TestAudio;
