const file = require('fs');

const readGrocery = () => {
    // file.readFile('grocery-list.json', 'utf8', (err, data) => {
    //     if (!err) {
    //         return JSON.parse(data);
    //     }
    // })
    return JSON.parse(file.readFileSync('grocery-list.json'));
}

module.exports = readGrocery;
