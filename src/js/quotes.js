import { randomInteger } from "./helpers.js";

export async function initQuotes() {
  const data = 'js/data.json';
  const res = await fetch(data);
  const quotes = await res.json()
  
  const quote = document.querySelector('.quote')
  const author = document.querySelector('.author')
  quote.textContent = quotes[1].text
  author.textContent = quotes[1].author

  document.querySelector('.change-quote').addEventListener('click', () => {
    const int =  randomInteger(0, quotes.length - 1);
    quote.textContent = quotes[int].text
    author.textContent = quotes[int].author
  })
}