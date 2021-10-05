const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);
const writeToFile = util.promisify(fs.writeFile);

class DB {
    readIt() {
        return readFromFile('db/db.json', 'utf8');
    }

    writeIt(notes) {

    }

    getAllNotes() {
        return this.readIt()
        .then(data => {
            let orderedNotes;
        try {
            orderedNotes = [].concat(JSON.parse(data))
        } catch(err) {
            orderedNotes = []
        }

        return orderedNotes;
        })

    }
}