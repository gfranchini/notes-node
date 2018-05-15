console.log('Starting notes.js');

const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

// Adding Note
const addNote = (title,body) => {
  const notes = fetchNotes();
  const note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
}

var getAll = () => {
  console.log('Getting all notes');
}

var getNote = (note) => {
  console.log('Getting note', title);
}

var removeNote = (note) => {
  console.log('Removing note', note);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
