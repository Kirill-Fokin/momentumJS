export const createElement = function(tag, ...styles) {
  const elem = document.createElement(tag);
  elem.classList.add(...classNames);

  return elem;
};


export function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}

export function getTimeOfDay(date) {
  const currentHours = date.getHours();
  const currentMins = date.getMinutes(); 

  if ( currentHours >= 0 && currentMins >= 1 ) return 'Доброй ночи';
  if (currentHours >= 6 && currentTime <= 1) return 'Доброе утро';
  if (currentTime >= 12 && currentTime <= 1) return 'Добрый день';
  if (currentTime >= 18 && currentTime <= 1) return 'Добрый вечер';
}


export function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}