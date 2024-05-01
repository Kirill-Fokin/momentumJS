import { createElement, isNullOrUndefined } from "./helpers.js"

export function initNotes() {
  const notesField = createElement('div', 'notes-field');
  const addNoteButton = createElement('button', 'add-note-button');
  addNoteButton.textContent  = '+';
  notesField.append(addNoteButton);
  addNoteButton.addEventListener('click', () => {
     const text = prompt();
     if (text !== '' && text !== undefined && text !== null ) {
      notesField.append(createNewNote(text))
     }
   })
    document.querySelector('.footer').prepend(notesField);
  
  const notes =  getNotesLocalSotarge();
  console.log(notes)
  notes.forEach(note => notesField.append(note));
  notes.forEach(note => state.readyNotes.forEach(readyNote =>  {
  if (note.firstChild.textContent === readyNote) {
    note.classList.add('green')
    return
  }}
  ))
   
  function createNewNote(message) {
    let text = null;
    text = message;
    if (text === '') return; 
    else {
      const note = createElement('div', 'note');
      note.addEventListener('click', (e) => { 
        addNoteMenu(e.target)
      })
    note.textContent = text;
    if (text !== 'empty') {
      state.notes.push(text);
    }
    return note;
    }
  }

  function addNoteMenu(target) {
    if (!target.classList.contains('note')) return;
    if (target.children.length !== 0) {
      Array.from(target.children).forEach((el) => el.remove());
    } else {
      const redButton = createElement('button', 'red-button' , 'choise-button')
      redButton.textContent = 'X'
      redButton.addEventListener('click', (e) => deleteNote(e.target))
      const greenbutton = createElement('button', 'green-button', 'choise-button')
      greenbutton.textContent = '✓'
      greenbutton.addEventListener('click', (e) => getReadyNote(e.target));
      const bluebutton = createElement('button', 'blue-button', 'choise-button')
      bluebutton.addEventListener('click', (e) => changeNote(e.target))
      bluebutton.textContent = 'cg'
      target.append(redButton, greenbutton, bluebutton);
    }
  }

  function getNotesLocalSotarge() {
    const data = [];
    if (state.notes.length === 0) {
      data.push(createNewNote('empty'));
    } else {
      console.log(state.notes)
      state.notes = state.notes
                           .filter(textNote => isNullOrUndefined(textNote))
                           .forEach(text => data.push(createNewNote(text)));
    }
    return data;
  }

  function deleteNote(target) {
    const note = target.closest('.note');
    state.notes = state.notes.filter(el => el !== note.firstChild.textContent);
    state.readyNotes = state.readyNotes.filter(el => el !== note.firstChild.textContent)
    target.closest('.note').remove();
  }
   

  function changeNote(target) {
    const text = prompt('change note', target.closest('.note').firstChild.textContent);
    if (target.closest('.note').firstChild.textContent === 'empty' && text !== '') {
      state.notes.push('empty');
      state.notes[state.notes.indexOf(target.closest('.note').firstChild.textContent)] = text;
      target.closest('.note').firstChild.textContent = text;
    } else {
      if (text !== '') {
        state.notes[state.notes.indexOf(target.closest('.note').firstChild.textContent)] = text;
        target.closest('.note').firstChild.textContent = text;
      }
    }
  }

  function getReadyNote(target) {
    const note = target.closest('.note');
    const text = note.firstChild.textContent;
    if (note.classList.contains('green')) {
      state.readyNotes = state.readyNotes.filter(el => el !== text);
      note.classList.remove('green');
    } else {
      note.classList.add('green');
      state.readyNotes.push(text);
    }
  }
}