const router = require('express').Router();
const path = require('path');

// route for notes page
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})
// routes for landing page
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.export = router;