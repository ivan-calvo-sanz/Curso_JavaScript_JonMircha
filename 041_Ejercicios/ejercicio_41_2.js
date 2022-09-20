/*
EJERCICIOS VIDEO 41_2
Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array
ej:  miFuncion([1,4,5,99,-60])
devuelve: [99,-60]
*/


console.log("EJERCICIOS VIDEO 41_2");
//CON FUNCION EXPRESADA
const arrayMinMax = (arr = undefined) => {
    if (arr === undefined) return console.warn("NO has ingresado un arreglo de numeros");
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste NO es un arreglo");
    if (arr.length === 0) return console.error("El arreglo está vacio");

    for (let num of arr) {
        if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
    }

    return console.log(`Arreglo original: ${arr}\nValor mayor: ${Math.max(...arr)}\nValor menor: ${Math.min(...arr)}`);
}

arrayMinMax();
arrayMinMax(true);
arrayMinMax([]);
arrayMinMax([1,4,5,"tu"]);
arrayMinMax([1,4,5,99,-60]);