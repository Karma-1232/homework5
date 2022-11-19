// Add js here.

var vid = document.getElementById("videoplayer");
vid.autoplay = false;
vid.loop = false;
vid.load();


const playButtom = document.getElementById("play");
playButtom.addEventListener("click", funcPlay);

function funcPlay(){
    vid.play();
}



const pauseButtom = document.getElementById("pause");
pauseButtom.addEventListener("click", funcPause);

function funcPause(){
    vid.pause();
}



const slowerButtom = document.getElementById("slower");
slowerButtom.addEventListener("click", funcSlower);

function funcSlower(){
    if(vid.playbackRate == 2){
        vid.playbackRate = 1;
    }
    else if(vid.playbackRate == 1){
        vid.playbackRate = 0.5;
    }
    else{
        alert("Video is at slowest speed!");
    }
}



const fasterButtom = document.getElementById("faster");
fasterButtom.addEventListener("click", funcFaster);

function funcFaster(){
    if(vid.playbackRate == 0.5){
        vid.playbackRate = 1;
    }
    else if(vid.playbackRate == 1){
        vid.playbackRate = 2;
    }
    else{
        alert("Video is at fastest speed!");
    }
}



const skipButtom = document.getElementById("skip");
skipButtom.addEventListener("click", funcSkip);

function funcSkip(){
    if((vid.currentTime + 15) < vid.duration){
        vid.currentTime += 15;
    }
    else{
        vid.currentTime = 0;
    }
}



const muteButtom = document.getElementById("mute");
muteButtom.addEventListener("click", funcMute);

function funcMute(){
    if(vid.muted == false){
        vid.muted = true;
        muteButtom.innerText = 'unmute';
    }
    else{
        vid.muted = false;
        muteButtom.innerText = 'mute';
    }
}



const slider = document.getElementById("slider");
const volume = document.getElementById("volume");
slider.addEventListener("change", funcSlider);

function funcSlider(){
    vid.volume = slider.value / 100;
    volume.innerText = slider.value;
}

