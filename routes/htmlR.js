const router = require('express').Router();
const path = require('path');

// route for notes page
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})
// routes for landing page
router.get("*",  (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router;