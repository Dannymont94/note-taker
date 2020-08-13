const router = require('express').Router();
const uuid = require('uuid');
const { notes } = require('../../data/db.json');
const { validateNote, createNewNote } = require('../../lib/notes');

// create GET /api/notes route to read db.json and return all saved notes as JSON
router.get('/notes', (req, res) => {
  res.json(notes);
});

// create POST /api/notes route to recieve a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
router.post('/notes', (req, res) => {
  // need to give each note a unique id when it's saved
  req.body.id = uuid.v4();
  
  if (!validateNote(req.body)) {
    res.status(400).send('Please make sure your note has a title and body text before saving.');
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});  

// BONUS: create DELETE api/notes/:id route containing the id of a note to delete. Will need to read all notes from the db.json file, 
  // remove the note with the given id property, and then rewrite the notes to the db.json file.

module.exports = router;