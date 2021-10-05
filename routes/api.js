const router = require('express').Router();
const uuidv4 = require('uuid');
const fs = require('fs');

// get request
router.get("/notes", (req, res) => {
    const notes = fs.readFileSync('db/db.json', 'utf8');
    const notesArray = JSON.parse(notes);
    res.json(notesArray);
});



module.exports = router;