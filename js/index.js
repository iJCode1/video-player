const $video = document.querySelector("#video");
const $forward = document.querySelector("#forward");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const  $backward = document.querySelector("#backward");

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);

function handlePlay(){
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}

function handlePause(){
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
}