/*
EJERCICIOS VIDEO 41_1
Programa una función que dado un array numerico devuelve otro array con los números elevados
al cuadrado
ej:  miFuncion([1,4,5])
devuelve: [1,16,25]
*/


console.log("EJERCICIOS VIDEO 41_1");
//CON FUNCION EXPRESADA
const devolverArrayCuadrados = (arr = undefined) => {
    if (arr === undefined) return console.warn("NO has ingresado un arreglo de numeros");
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste NO es un arreglo");
    if (arr.length === 0) return console.error("El arreglo está vacio");

    for (let num of arr) {
        if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
    }

    const newArray = arr.map(e => e * e);
    return console.log(`Arreglo original: ${arr},\nArreglo elevado al cuadrado: ${newArray}`);

}

devolverArrayCuadrados();
devolverArrayCuadrados(true);
devolverArrayCuadrados([]);
devolverArrayCuadrados([1,4,5,"tu"]);
devolverArrayCuadrados([1,4,5]);