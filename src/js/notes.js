import { createElement } from "./helpers.js"

export function initNotes() {
  const notesField = createElement('div', 'notes-field')
  state.notes.length !== 0 ? initNotesFromMemory() : initNotesFromMemory('notes is empty');
  const addNoteButton = createElement('button', 'add-note-button');
  addNoteButton.textContent  = '+';
  notesField.append(addNoteButton);
  addNoteButton.addEventListener('click', () => creteNewNote())


  

  function creteNewNote() {
    if (state.notes.length > 3) alert('слишком много заметок') 
    else {
      const text = prompt('add note text')
      if (text === '') return 
      const note = createElement('div', 'note');
      note.addEventListener('dblclick', (e) =>{ 
        deleteNote(e.target)})
      note.addEventListener('click', (e) =>{ 
          changeNote(e.target)})
      note.textContent = text;
      state.notes.push(text);
      notesField.append(note);
    }
  }

  function initNotesFromMemory(message) {
    if (message) {
      const note = createElement('div', 'note')
      note.textContent = message;
      notesField.append(note);
    } else {
    state.notes.forEach(note => {
      const noteElem = createElement('div', 'note');
      noteElem.textContent = note;
      notesField.append(noteElem);
      noteElem.addEventListener('click', (e) => changeNote(e.target)  )
      state.notes;
    })
    }
  }

function changeNote(target) {
  const text = prompt('change value', target.value)
  if (text !== '') target.textContent = text;
}
function deleteNote(target) {
  console.log(target)
  if (confirm('delete note')) {
    // state.notes()
    target.remove()
  } else {
    // target.classList.remove('red')
  }
}
  document.querySelector('.footer').prepend(notesField);
}

