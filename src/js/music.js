export function initAudio() {
  const audio = document.querySelector("audio");

const links = ['Aqua Caelestis.mp3', 
               'Ennio Morricone.mp3', 
               'River Flows In You.mp3',
               'Summer Wind.mp3'
              ];

const linsksObjs = links.map(el => new Audio(`/src/assets/sounds/${el}`))
const audiOO = new Audio('/src/assets/sounds/Aqua Caelestis.mp3');
const play = document.querySelector('.play')



play.addEventListener('click', () => { 
  if (state.isPlay === false) {
    audiOO.play();
    state.isPlay = true;
  }
  audiOO.pause();
  state.isPlay = false;  
})

  function playAudio() {
    audio.currentTime = 0;
    audio.play();
  }

  function pauseAudio() {
    audio.pause();
  }
}