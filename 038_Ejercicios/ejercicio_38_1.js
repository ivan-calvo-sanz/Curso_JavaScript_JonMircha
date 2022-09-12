/*
EJERCICIOS VIDEO 38_1
Programa una función que determine si un numero es primo
(aquel que solo es divisible por si mismo y 1)
ej:   miFuncion(7)   devolverá true
*/


console.log("EJERCICIOS VIDEO 38_1");
//CON FUNCION EXPRESADA
const numPrimo = (numero = undefined) => {
    if (numero === undefined) return console.warn("No has ingresado numero");
    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado NO es numero `);
    if (numero === 0) return console.error("El número no puede ser 0");
    if (Math.sign(numero) === -1) return console.error("El número NO puede ser negativo");
    if (numero === 1) return false;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }

    return true;

}

console.log(numPrimo(1));