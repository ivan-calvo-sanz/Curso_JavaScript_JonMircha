/*
Iterables
*/

const iterable = [1, 2, 3];

//Accedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]();


/*
console.log(iterable);
console.log(iterador);
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
*/


let next = iterador.next();
while (!next.done) {
    console.log(next.value);
    next = iterador.next();
}


//ITERABLE Set
const iterableSet = new Set([1, 2, 2, 2, 3]);

const iteradorSet = iterableSet[Symbol.iterator]();

let nextSet = iteradorSet.next();
while (!nextSet.done) {
    console.log(nextSet.value);
    nextSet = iteradorSet.next();
}


//ITERABLE String
const iterableString = "Hola Mundo";

const iteradorString = iterableString[Symbol.iterator]();

let nextString = iteradorString.next();
while (!nextString.done) {
    console.log(nextString.value);
    nextString = iteradorString.next();
}

//ITERABLE Map
const iterableMap = new Map(
    [["nombre", "jon"],
    ["edad", 35]]
);

const iteradorMap = iterableMap[Symbol.iterator]();

let nextMap = iteradorMap.next();
while (!nextMap.done) {
    console.log(nextMap.value);
    nextMap = iteradorMap.next();
}