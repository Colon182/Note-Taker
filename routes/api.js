const router = require('express').Router();
const uuidv4 = require('uuid');
const fs = require('fs');

// get request
router.get("/notes", (req, res) => {
    const notes = fs.readFileSync('db/db.json', 'utf8');
    const notesArray = JSON.parse(notes);
    res.json(notesArray);
});

router.post("/notes", (req, res) => {
    const notes = fs.readFileSync('db/db.json', 'utf8');
    const notesArray = JSON.parse(notes);
    res.json(notesArray);
    const notesList = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    const newNote = notesArray.concat(notesList);
    const newList = fs.writeFileSync('db/db.json', JSON.stringify(newNote));
    res.json(newList);
})

module.exports = router;