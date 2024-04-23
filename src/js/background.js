import { randomInteger, getTimeOfDay } from "./helpers.js"


export function initBackground() {
  document.querySelector('.slide-prev').addEventListener('click', () => setBg('evening',  2))
  document.querySelector('.slide-next').addEventListener('click', () => setBg('evening', 3))

  function setBg(timeOfDay, randomNumber) {
    if (randomNumber >= 20 || (!randomNumber) ) {
        randomNumber = 1
    }
    // document.body.style.backgroundImage =
    // `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${randomNumber}.jpg')`;
  }
  setBg(getTimeOfDay(), randomInteger(0, 20))
}





