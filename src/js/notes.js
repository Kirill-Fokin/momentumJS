import { createElement } from "./helpers.js"

export function initNotes() {
  const notesField = createElement('div', 'notes-field');
  state.notes.length !== 0 ? initNotesFromMemory() : notesField.append(createNewNote('empty'));
  const addNoteButton = createElement('button', 'add-note-button');
  addNoteButton.textContent  = '+';
  notesField.append(addNoteButton);
  addNoteButton.addEventListener('click', () => notesField.append(createNewNote()))
  document.querySelector('.footer').prepend(notesField);

  function addMenutoNote(target) {
    if (target.children.length !== 0) {
     const elems = Array.from(target.children)
     elems.forEach((el) => el.remove())
    } else {
      const redButton = createElement('button', 'red-button' , 'choise-button')
      redButton.textContent = 'X'
      redButton.addEventListener('click', (e) => deleteNote(e.target))
      const greenbutton = createElement('button', 'green-button', 'choise-button')
      greenbutton.textContent = '✓'
      greenbutton.addEventListener('click', (e) => becomeReadeyNote(e.target));
      const bluebutton = createElement('button', 'blue-button', 'choise-button')
       bluebutton.addEventListener('click', (e) => changeNote(e.target) )
      bluebutton.textContent = 'cg'
      target.append(redButton, greenbutton, bluebutton);
      

    }
  }



  function createNewNote(message) {
    if (state.notes.length > 3) alert('слишком много заметок') 
    else {
      let text = null;
      if (message) {
         text = message;
      } else {
         text = prompt('add note text')
      }
      if (text === '') return 
      const note = createElement('div', 'note');
    note.addEventListener('click', (e) =>{ 
         addMenutoNote(e.target)})
      note.textContent = text;
      state.notes.push(text);
      checkEmptyNote()
      return note;
    }
  }

  function becomeReadeyNote(target) {
    if (target.closest('.note').classList.contains('green')) {
      target.closest('.note').classList.remove('green');
      state.readyNotes = state.readyNotes.filter((el) => el !== target.closest('.note').firstChild)
    } else {
      target.closest('.note').classList.add('green');
      state.readyNote.push(target.closest('.note').firstChild);
    }
  }

  function initNotesFromMemory() {
    state.notes.forEach(note => {
      const noteElem = createNewNote(note);
      state.readyNotes.forEach(el => { 
        if (el === note) {
          noteElem.classList.add('green')
      }})
      notesField.append(noteElem);

    })
  }

  function changeNote(target) {
    const text = prompt('change value')
    if (text !== '') {
    }
  }

  function deleteNote(target) {
    if (confirm('delete note')) {
      const text = target.closest('.note').firstChild
      state.notes = state.notes.filter((el) => el === text)
      target.closest('.note').remove()
      if (document.querySelectorAll('.note').length === 0) {
     notesField.append(createNewNote('empty'));
     }
    } 
    state.notes.filter(el => el !== null)
  } 
}