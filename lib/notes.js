function validateNote(note) {
  if (!note.title || !note.text) {
    return false;
  }
  return true;
}

module.exports = {
  validateNote
};