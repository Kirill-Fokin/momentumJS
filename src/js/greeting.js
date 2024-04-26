import { getWeekDay, getTimeOfDay, sendJson } from "./helpers.js";

export const initGreeting = function() {
  const inputName = document.querySelector('.name')
  if (state.name) {
    inputName.value = state.name;
  }
  const data = JSON.parse(localStorage.getItem('data'))
  if (data) { 
    inputName.value = data.name
  }
  showTime();

  if (JSON.parse(localStorage.getItem(('state')))) {
    window.state = JSON.parse(localStorage.getItem(('state')));
  } 

  inputName.addEventListener('change', () => {
    state.name = inputName.value;
  });

  function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    document.querySelector('.time').textContent = currentTime;
    showDate()
    setTimeout(showTime, 1000);
  }

  function showDate() {
    const date = new Date();
    const options = {
      month: "long",
      day: "numeric",
      timeZone: "UTC",    
    };

    const currentDate = date.toLocaleDateString("ru", options);
    document.querySelector('.date').textContent = getWeekDay(date) + ', ' + currentDate ;
    document.querySelector('.greeting').textContent = 'Good ' +  getTimeOfDay(date) + ','
  }
}