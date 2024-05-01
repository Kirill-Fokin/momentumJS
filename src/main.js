import { initApp } from "./js/app.js"

window.state = {
    notes: [],
    readyNotes : [],
    name: null,
    isPlay: false,
    tracks: null,
    previosWallppapper: null,
 }


 console.log(JSON.parse(localStorage.getItem(('state'))))

if (JSON.parse(localStorage.getItem(('state')))) {
  window.state = JSON.parse(localStorage.getItem(('state')));
}
 
window.addEventListener('load', () => {
  const dataFormLocalStorage = JSON.parse(localStorage.getItem(('state')));
  if (dataFormLocalStorage !== null) {
    window.state = dataFormLocalStorage ;
  };
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('state', JSON.stringify(window.state));fdg
});

initApp()



