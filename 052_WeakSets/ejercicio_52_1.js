/*
WeakSets   MapSeats
*/

//const ws = new WeakSet([1, 2, 3, true, false, false, {}, {}, "hola", "HOla"]);

const ws = new WeakSet();

let valor1 = { "valor1": 1 };
let valor2 = { "valor2": 2 };
let valor3 = { "valor3": 3 };

ws.add(valor1);
ws.add(valor2);
console.log(ws);

console.log(ws.has(valor1));

//ws.delete(valor2);


const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

//se añade los objetos al WeakMap indicándole la posición dentro del WeakMap
wm.set(llave1, 1);
wm.set(llave2, 2);
console.log(wm);

console.log(wm.has(llave1));

console.log(wm.get(llave1));

//wm.delete(llave2);

/*
setInterval(() => console.log(wm), 1000);
setTimeout(() => {
    llave1 = null;
    llave2 = null;
    llave3 = null
}, 5000);
*/


setInterval(() => console.log(ws), 1000);
setTimeout(() => {
    valor1 = null;
    valor2 = null
}, 5000);