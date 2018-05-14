console.log('Starting notes.js');

var addNote = (title,body) => {
  console.log('Adding note', title, body);
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
