
const playlist=[{title:"Ruqyah Track 1",src:"/assets/audios/ruqyah1.mp3"}];
const audio=document.getElementById('audio');const playPauseBtn=document.getElementById('playPauseBtn');
const trackTitle=document.getElementById('trackTitle');let current=0;
function loadTrack(i){current=i;audio.src=playlist[i].src;trackTitle.textContent=playlist[i].title;}
function playAudio(){audio.play();playPauseBtn.textContent='Pause';}
function pauseAudio(){audio.pause();playPauseBtn.textContent='Play';}
playPauseBtn.onclick=()=>{audio.paused?playAudio():pauseAudio();}
loadTrack(0);
if('serviceWorker'in navigator){navigator.serviceWorker.register('/service-worker.js');}
