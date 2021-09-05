const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); 

// get request
router.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'))
});

// post request
router.post("/notes", (req, res) => {

})

// delete request
router.delete("/notes", (req, res) => {

})

module.exports = router;