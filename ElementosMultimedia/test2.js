var audio = document.getElementById("audioPlayer");
var video = document.getElementById("videoPlayer");
var volumenControl = document.getElementById("volumenControl");
var videoVolumenControl = document.getElementById("videovolumenControl");
var currentTimeDisplay = document.getElementById("currentTime");
var videoCurrentTimeDisplay = document.getElementById("videoCurrentTime");
var durationDisplay = document.getElementById("duration");
var videoDurationDisplay = document.getElementById("videoDuration");

function toogleAudio(){
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }
}

function toogleVideo(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

function setVolumen(){
    audio.volume = volumenControl.value;
}

function setVideoVolumen(){
    video.volume = videoVolumenControl.value;
}

function seekBackward(){
    audio.currentTime -=10;
}
function seekForward(){
    audio.currentTime +=10;
}
function videoSeekBackward(){
    video.currentTime -=10;
}
function videoSeekForward(){
    video.currentTime +=10;
}

audio.addEventListener("timeupdate", updateAudioTime);

function updateAudioTime(){
    currentTimeDisplay.textContent=formatTime(audio.currentTime);
    durationDisplay.textContent = formatTime(audio.duration);
}

video.addEventListener("timeupdate", updateVideoTime);

function updateVideoTime() {
    currentTimeDisplay.textContent = formatTime(video.currentTime);
    durationDisplay.textContent = formatTime(video.duration);
}

function formatTime(time){
    var minutes = Math.floor(time/60);
    var seconds = Math.floor(time%60);

    seconds = seconds>10 ? "0"+seconds: seconds;
    return minutes+":"+seconds;
}