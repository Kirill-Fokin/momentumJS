import { getWeekDay, getTimeOfDay } from "./helpers.js";

export const initGreeting = function() {

  const inputName = document.querySelector('.name')
   const data = JSON.parse(localStorage.getItem('data'))
   if (data) {
    inputName.value = data.name
   } 

   const state = {
    name: null,
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
    document.querySelector('.greeting').textContent = getTimeOfDay(date)
  }

  function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    document.querySelector('.time').textContent = currentTime;
    showDate()
     

    setTimeout(showTime, 1000);
  }
  showTime();




  inputName.addEventListener('change', () => {state.name = inputName.value;
    let json = JSON.stringify(state);
    localStorage.setItem("data", json);
});

}