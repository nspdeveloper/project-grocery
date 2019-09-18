const file = require('fs');

const writeGrocery = (data) => {
    file.writeFile('grocery-list.json', JSON.stringify(data), (err) => {
        if (err) {
            console.log(err);
        }
    })
}

module.exports = writeGrocery;
