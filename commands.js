const file = require('fs');
const read = require('./grocery-read');
const write = require('./grocery-write');

const add = (item, price) => {
    let list = read();
    let indexOfGrocery = list.findIndex((x) => x.item == item);
    // if not found then add grocery directly
    if (indexOfGrocery == -1) {
        list.push({ item, price });
    } else {
        // if item found then update price only
        list[indexOfGrocery].price += price;
    }
    write(list);
}
const remove = (item) => {
    let list = read();
    let indexOfGrocery = list.findIndex((x) => x.item == item);
    if (indexOfGrocery != -1) {
        write(list.filter((x) => x.item != item));
    }
}
const priceOf = (item) => {
    let list = read();
    let indexOfGrocery = list.findIndex((x) => x.item == item);
    if (indexOfGrocery != -1) {
        return list[indexOfGrocery].price;
    }
}
const print = () => {
    console.log(read());
}

module.exports = {
    add, remove, priceOf, print
};