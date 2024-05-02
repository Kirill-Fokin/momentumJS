export const createElement = function(tag, ...styles) {
  const elem = document.createElement(tag);
  elem.classList.add(...styles);

  return elem;
};

export function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}

export function getTimeOfDay() {
  const date = new Date()
  const currentHours = date.getHours()
  const currentMins = date.getMinutes()
  if (currentHours >= 0 && currentMins >= 1 && currentHours < 6) return 'Night';
  if (currentHours >= 6 && currentMins >= 1 && currentHours < 12) return 'Morning';
  if (currentHours >= 12 && currentMins >= 1  && currentHours < 18) return 'Day';
  if (currentHours>= 18 && currentMins >= 1 && currentHours  !== 0)  return 'Evening';
}

export function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
}

export function  isNullOrUndefined(value) {
  return value !== null && value !== undefined;
}