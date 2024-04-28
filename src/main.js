import { initApp } from "./js/app.js"

window.state = {
    notes: [],
    name: null,
    isPlay: false,
    currentTrack: null,
    currentAudio: null,
    tracks: null,
    previosWallppapper: null,
 }

if (JSON.parse(localStorage.getItem(('state')))) {
  window.state = JSON.parse(localStorage.getItem(('state')));
}
 
window.addEventListener('load', () => {
  console.log(JSON.parse(localStorage.getItem(('state'))));
  if (window.state === null)  window.state = JSON.parse(localStorage.getItem(('state')));
  console.log(state)
});

window.addEventListener('beforeunload', () => {
  // localStorage.setItem('state', JSON.stringify(window.state));
});


console.log(state)
initApp()

