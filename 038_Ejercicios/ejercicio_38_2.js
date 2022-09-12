/*
EJERCICIOS VIDEO 38_2
Programa una función que determine si un numero es par o impar
ej:   miFuncion(29)   devolverá Impar
*/


console.log("EJERCICIOS VIDEO 38_2");
//CON FUNCION EXPRESADA
const numPar = (numero = undefined) => {
    if (numero === undefined) return console.warn("No has ingresado numero");
    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado NO es numero `);
    //if (numero === 0) return console.error("El número no puede ser 0");
    //if (Math.sign(numero) === -1) return console.error("El número NO puede ser negativo");

    return ((numero % 2) === 0)
        ? console.log(`El número ${numero} es Par`)
        : console.log(`El número ${numero} es Impar`);

}

numPar();
numPar("23");
numPar(-398);
numPar(19);
numPar(0);