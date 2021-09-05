const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); 
const util = require('util')
const readFromFile = util.promisify(fs.readFile);
// writeToFile and readAndAppend recieved from class lecture (12-Express:21-Ins_Modular-Routing)
const writeToFile = (destination, content) => 
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => 
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
    );
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if(err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    })
}
// get request
router.get("/notes", (req, res) => {
    readFromFile('../db/db.json').then((data) => {res.json(JSON.parse(data))})
});

// post request
router.post("/notes", (req, res) => {
    const {title, text, id} = req.body;
    if (title && text) {
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuidv4()
        };
        readAndAppend(newNote, '../db/db.json');
    };

})

// delete request
router.delete("/notes", (req, res) => {

})

module.exports = router;