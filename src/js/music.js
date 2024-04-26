import { createElement } from "./helpers.js";
import playList from "./playlist.js";

export function initAudio() {
  const audioField = createElement('div', 'audio-field');
  const playButton = document.querySelector('.play')
  const nextButton = document.querySelector('.play-next')
  const prevButton = document.querySelector('.play-prev')
  const albumLogo = document.querySelector('.album')


  albumLogo.addEventListener('click', () => {
    if (audioField.classList.contains('none')) {
      audioField.classList.remove('none')
    } else {
      audioField.classList.add('none')
    }
  }) 
  nextButton.addEventListener('click', () => playNext())
  playButton.addEventListener('click', () => playAudio())
  prevButton.addEventListener('click', () => playprev())

  function playNext() {
    if (audio.src) {
     audio.pause()
     let fileName = audio.src.split('/').slice(-1)[0];
     while (fileName.includes('%')) {
       fileName = fileName.replace('%', '');
     }
     while (fileName.includes('20')) {
      fileName = fileName.replace('20', ' ');
    }

     let indx = playList.findIndex( item => {
       return (item.src.split('/').slice(-1)[0] === fileName)
     }
      )
      indx + 1 > playList.length - 1 ?  indx = 0 : indx++
      console.log(indx)
     audio.src = playList[indx ].src;
     audio.play()
     state.isPlay = true;
    } else {
     audio.src = playList[0].src;
     audio.play();
     state.isPlay = true;
    }
  }

  function playprev() {
    if (audio.src) {
      audio.pause()
      let fileName = audio.src.split('/').slice(-1)[0];
      while (fileName.includes('%')) {
        fileName = fileName.replace('%', '');
      }
      while (fileName.includes('20')) {
       fileName = fileName.replace('20', ' ');
     }

     let indx = playList.findIndex( item => {
      return (item.src.split('/').slice(-1)[0] === fileName)
    })
    indx - 1 < 0 ?  indx = playList.length - 1 : indx--
    
    audio.src = playList[indx ].src;
    
     audio.play()
     state.isPlay = true;
    } else {
      audio.src = playList[0].src;
      audio.play();
      state.isPlay = true;
    }
  }
  
  const audio = new Audio();

  function playAudio() {
    if (audio.src && state.isPlay) {
      audio.pause();
      state.isPlay = false;
    } 
    else if ((audio.src && !state.isPlay)) {
      audio.play()
      state.isPlay = true;
    }
  }

 playList.forEach(el => {
  const li = document.createElement("li");
  li.textContent = el.title
  li.addEventListener('click', () => {
    audio.pause();
    audio.src = el.src;
    audio.play()
    state.isPlay = true;
  })
  audioField.append(li);
 })

 document.querySelector('.player').append(audioField); 
}