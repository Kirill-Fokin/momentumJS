
import { initGreeting } from "./greeting.js";
import { initQuotes } from "./quotes.js";
import { initWeather } from "./weather.js";
import { initAudio } from "./music.js";
import { initUnsplash } from "./unsplashAPi.js";
import { initNotes } from "./note.js";


export function initApp() {
  initGreeting();
  initQuotes();
  initWeather('4cf5ae56a1681c85a6c2c6d87fd3e162');
  const cityInp = document.querySelector('.city');
  cityInp.addEventListener('change', () => initWeather('4cf5ae56a1681c85a6c2c6d87fd3e162', cityInp.value));
  initAudio() 
  initNotes()
  // initUnsplash()
}


