import { randomInteger } from "./helpers.js";

export async function initQuotes() {
  const quote = document.querySelector('.quote');
  const author = document.querySelector('.author');

  const data =  'https://type.fit/api/quotes';
  const res = await fetch(data);
  const quotes = await res.json();
  quote.textContent = quotes[1].text;
  author.textContent = quotes[1].author;

  document.querySelector('.change-quote').addEventListener('click', () => changeQuote());

  function changeQuote() {
    let int =  randomInteger(0, quotes.length - 1);
    while (quote.textContent === quotes[int].text) {
      int =  randomInteger(0, quotes.length - 1);
    } 
    quote.textContent = quotes[int].text;
    author.textContent = quotes[int].autho;
    state.quote = quotes[int].autho;
    sendJson(state);   
  }
}