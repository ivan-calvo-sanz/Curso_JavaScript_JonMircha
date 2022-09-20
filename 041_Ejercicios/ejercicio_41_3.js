/*
EJERCICIOS VIDEO 41_3
Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el
primero almacena los números pares y en el segundo los impares
ej:  miFuncion([1,2,3,4,5,6,7,8,9,0])
devuelve: {pares: [2,4,6,8,0] impares: [1,3,5,7,9]}
*/


console.log("EJERCICIOS VIDEO 41_3");
//CON FUNCION EXPRESADA
const separarParesImpares = (arr = undefined) => {
    if (arr === undefined) return console.warn("NO has ingresado un arreglo de numeros");
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste NO es un arreglo");
    if (arr.length === 0) return console.error("El arreglo está vacio");

    for (let num of arr) {
        if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
    }

    return console.log({
        pares: arr.filter(num => num % 2 === 0),
        impares: arr.filter(num => num % 2 === 1)
    });
}

separarParesImpares();
separarParesImpares(true);
separarParesImpares([]);
separarParesImpares([1,4,5,"tu"]);
separarParesImpares([1,4,5,99,-60]);