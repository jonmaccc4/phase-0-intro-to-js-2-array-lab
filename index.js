// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function addCat(name) {
    cats.push(name);
}

function destructivelyAppendCat(name) {
    cats.push(name);
}

function  destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
}

function destructivelyRemoveLastCat(Garfield) {
    cats.pop(Garfield);
}

function destructivelyRemoveFirstCat(Milo) {
    cats.shift(Milo);
}

 function appendCat(name) {
    return [...cats, name];
 }

 function prependCat(name) {
    return [name, ...cats];
 } 

 function  removeLastCat(name) {
    return cats.slice(0, -1);
 }

 function removeFirstCat(name) {
    return cats.slice(1)
 }
module.exports = {cats, destructivelyAppendCat,  destructivelyPrependCat, destructivelyRemoveLastCat, destructivelyRemoveFirstCat, appendCat, prependCat,  removeLastCat, removeFirstCat };
