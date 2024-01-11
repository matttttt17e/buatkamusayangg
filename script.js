let music = document.getElementById("music");
let ctrlBtn = document.getElementById("playBtn");

const body = document.querySelector('body');

function playPause () {
  if (playBtn.classList.contains("fa-pause")) {
    music.pause();
    ctrlBtn.classList.remove("fa-pause");
    ctrlBtn.classList.add("fa-play");
  }
  else if (playBtn.classList.contains("fa-play")) {
    music.play();
    ctrlBtn.classList.add("fa-pause");
    ctrlBtn.classList.remove("fa-play");
    body.classList.add('play-music');
  }
}