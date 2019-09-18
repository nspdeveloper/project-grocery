console.log("welcome on grocery system");

/* Commands */
//inputs
const yargs = require('yargs');
const command = yargs.argv._[0];
const groceryItem = yargs.argv.item;
const groceryItemPrice = yargs.argv.price;

// commands modules
const groceryCommands = require('./commands');
switch (command) {
    case 'add': {
        if (groceryItem && groceryItemPrice) {
            groceryCommands.add(groceryItem, groceryItemPrice);
        }
        break;
    }
    case 'remove': {
        if (groceryItem) {
            groceryCommands.remove(groceryItem)
        }
        break;
    }
    case 'priceOf': {
        if (groceryItem) {
            console.log(`price of ${groceryItem} is ${groceryCommands.priceOf(groceryItem)}`);
        }
        break;
    }
    case 'print': {
        groceryCommands.print();
        break;
    }
    default: {
        console.log('Ok! above command not found.');
        break;
    }
}

