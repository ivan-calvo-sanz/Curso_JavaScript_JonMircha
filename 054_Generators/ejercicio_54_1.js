/*
Generators
*/

function* iterable() {
    //yield realiza un return
    yield "hola";
    console.log("Hola consola");
    yield "hola 2";
    console.log("Seguimos con más instrucciones");
    yield "hola 3";
    yield "hola 4";
}

let iterador = iterable();
/*
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
*/

for (let y of iterador) {
    console.log(y);
}

//guardar en un Array los valores del yield
//mediante Spread Operator
const arr = [...iterable()];
console.log(arr);


//EJERCICIO
//funcion Generators eleva al cuadrado
function cuadrado(valor) {
    setTimeout(() => {
        return console.log({ valor, resultado: valor * valor })
    }, Math.random() * 1000);
}

function* generador() {
    console.log("Inicia Generador");
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    console.log("Termina Generador");
}

let gen = generador();
for (let y of gen) {
    console.log(y);
}