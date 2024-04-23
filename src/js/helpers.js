export const createElement = function(tag, ...styles) {
  const elem = document.createElement(tag);
  elem.classList.add(...classNames);

  return elem;
};

export function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}

export function getTimeOfDay() {
  const date = new Date()
  const currentHours = date.getHours();
  const currentMins = date.getMinutes(); 
  if ( currentHours >= 0 && currentMins >= 1 ) return 'Night';
  if (currentHours >= 6 && currentTime <= 1) return 'Morning';
  if (currentTime >= 12 && currentTime <= 1) return 'Day';
  if (currentTime >= 18 && currentTime <= 1) return 'Evening';
}

export function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
}

export function sendJson(data) {
  const json = JSON.stringify(state);
  localStorage.setItem("data", json);
}
