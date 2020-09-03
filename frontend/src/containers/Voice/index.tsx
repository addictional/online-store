import React, { useEffect } from 'react';
import styles from './style.module.sass';
import Modal from '@components/Modal';


function init (navigator : any) {
  
    // Older browsers might not implement mediaDevices at all, so we set an empty object first

    // if (navigator.mediaDevices === undefined) {
    //   navigator.mediaDevices = {};
    // }
  
  
    // Some browsers partially implement mediaDevices. We can't just assign an object
    // with getUserMedia as it would overwrite existing properties.
    // Here, we will just add the getUserMedia property if it's missing.
    if (navigator.mediaDevices.getUserMedia === undefined) {
        // navigator.mediaDevices.getUserMedia = function(constraints : any) {

        //     // First get ahold of the legacy getUserMedia, if present
        //     var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

        //     // Some browsers just don't implement it - return a rejected promise with an error
        //     // to keep a consistent interface
        //     if (!getUserMedia) {
        //     return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
        //     }

        //     // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
        //     return new Promise(function(resolve, reject) {
        //     getUserMedia.call(navigator, constraints, resolve, reject);
        //     });
        // }
    }
    var audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)(); 
    var analyser = audioCtx.createAnalyser();
    var distortion = audioCtx.createWaveShaper();
    var gainNode = audioCtx.createGain();
    var biquadFilter = audioCtx.createBiquadFilter();
    var canvas = document.getElementById("visual") as HTMLCanvasElement;
    var canvasCtx = canvas.getContext("2d") as CanvasRenderingContext2D;

    canvas.setAttribute('width','200');
    canvas.setAttribute('height','200');
    const WIDTH = 200;
    const HEIGHT = 200

    navigator.getUserMedia (
        // constraints - only audio needed for this app
        {
          audio: true
        },
      
        // Success callback
        function(stream : any) {
          const source = audioCtx.createMediaStreamSource(stream);
          source.connect(analyser);
          analyser.connect(distortion);
          distortion.connect(biquadFilter);
          biquadFilter.connect(gainNode);
          gainNode.connect(audioCtx.destination); // connecting the different audio graph nodes together
          gainNode.gain.value = 0
          visualize(stream);
      
        },
      
        // Error callback
        function(err : any) {
          console.log('The following gUM error occured: ' + err);
        }
    );
    function visualize(stream : any) {      
    
        canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
    
    
        analyser.fftSize = 256;
        var bufferLengthAlt = analyser.frequencyBinCount;
        console.log(bufferLengthAlt);
        var dataArrayAlt = new Uint8Array(bufferLengthAlt);
        var timeBuffer = new Uint8Array(bufferLengthAlt);
        var dataArray = new Uint8Array(bufferLengthAlt);

        canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
        analyser.getByteTimeDomainData(dataArrayAlt);
        // console.log(dataArrayAlt);
        // var draw = function() {
        //     const drawVisual = requestAnimationFrame(draw);

        //     analyser.getByteFrequencyData(dataArrayAlt);
        //     analyser.getByteTimeDomainData(timeBuffer);

        //     canvasCtx.fillStyle = 'rgb(255, 255, 255)';
        //     canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

        //     var barWidth = (WIDTH / bufferLengthAlt) * 2.5;
        //     var barHeight;
        //     var x = 0;
        //     console.log(timeBuffer.reduce((prev,next)=>{
        //         return Math.max(prev,next)
        //     }));
        //     for(var i = 0; i < bufferLengthAlt; i++) {
        //         barHeight = dataArrayAlt[i];

        //         canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',111,224)';
        //         canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight/2);

        //         x += barWidth + 1;
        //     }
        // };
        // draw();
        function draw() {
            const drawVisual = requestAnimationFrame(draw);
            analyser.getByteTimeDomainData(dataArray);
          
            canvasCtx.fillStyle = 'rgb(200, 200, 200)';
            canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
          
            canvasCtx.lineWidth = 2;
            canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
          
            const sliceWidth = WIDTH * 1.0 / bufferLengthAlt;
            let x = 0;
          
            canvasCtx.beginPath();
            for(var i = 0; i < bufferLengthAlt; i++) {
              const v = dataArray[i]/128.0;
              const y = v * HEIGHT/2;
          
              if(i === 0)
                canvasCtx.moveTo(x, y);
              else
                canvasCtx.lineTo(x, y);
          
              x += sliceWidth;
            }
          
            canvasCtx.lineTo(WIDTH, HEIGHT/2);
            canvasCtx.stroke();
          };
          
          draw();
    }  
}



  
const Voice : React.FC = () => {
    useEffect(()=>{
        init(navigator);
    },[])
    return (
        <Modal>
            <div className={styles.overlay}>
                <canvas id='visual'></canvas>
            </div>
        </Modal>
    )
}

export default Voice;