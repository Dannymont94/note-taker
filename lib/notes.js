const fs = require('fs');
const path = require('path');

function validateNote(note) {
  if (!note.title || !note.text) {
    return false;
  }
  return true;
}

function createNewNote(note, notesArray) {
  notesArray.push(note);

  fs.writeFileSync('../data/db.json', JSON.stringify({ notes: notesArray }, null, 2));

  return note;
}

function deleteNote(notesArray) {
  fs.writeFileSync('../data/db.json', JSON.stringify({ notes: notesArray }, null, 2));
}

module.exports = {
  validateNote,
  createNewNote,
  deleteNote
};