import { createElement } from "./helpers.js"

export function initNotes() {
  const notesField = createElement('div', 'notes-field')
   state.notes ?  initNotesFromMemory() : initNotesFromMemory('notes filed is empty');
   const addNoteButton = createElement('button', 'add-note-button');
   addNoteButton.textContent  = '+';
    notesField.append(addNoteButton);
    addNoteButton.addEventListener('click', () => creteNewNote())

  function creteNewNote() {
    if (state.notes.length > 3) console.log('слишком много заметок') 
    else {
    let text = prompt('add note text')
    const note = createElement('div', 'note');
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
    console.log(target.textContent)
    const text = prompt('change value', target.value)
    target.textContent = text;
}

function deleteNote(target) {
  if (confirm('delete note')) {
    state.notes()
    target.remove()
  }
}


  document.querySelector('.footer').prepend(notesField);
}

