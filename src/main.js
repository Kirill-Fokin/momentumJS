import { initApp } from "./js/app.js"
import { isNullOrUndefined } from "./js/helpers.js"

window.state = {
  notes: [],
  readyNotes : [],
  name: null,
  isPlay: false,
  tracks: null,
  previosWallppapper: null,
 }

if (JSON.parse(localStorage.getItem(('state')))) {
  const obj = (JSON.parse(localStorage.getItem(('state'))));
  obj.notes = (obj.notes.filter(el => isNullOrUndefined(el)))
  window.state = obj;
  console.log(state)
}

window.addEventListener('load', () => {
  const dataFormLocalStorage = JSON.parse(localStorage.getItem(('state')));
  if (dataFormLocalStorage !== null) {
    window.state = dataFormLocalStorage ;
  };
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('state', JSON.stringify(window.state));
});

initApp()



