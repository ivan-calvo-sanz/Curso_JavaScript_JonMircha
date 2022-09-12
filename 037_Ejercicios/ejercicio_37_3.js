/*
EJERCICIOS VIDEO 37_3
Programa una función que calcule el factorial de un número 
ej: miFuncion(5);
devolvera: 120
*/


console.log("EJERCICIOS VIDEO 37_3");
//CON FUNCION EXPRESADA
const factorial = (numero = undefined) => {
    if (numero === undefined) return console.warn("NO has ingresado ningún número");

    if (typeof numero !== "number") return console.error(`El valor ${numero} ingresado, NO es un número`);

    if (numero === 0) return console.error("El número no puede ser 0");

    if (Math.sign(numero) === -1) return console.error("El número NO puede ser negativo");

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    return console.log(`El factorial de ${numero} es ${factorial}`);
}


factorial(5);
factorial(-5);
factorial();