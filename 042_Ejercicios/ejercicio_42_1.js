/*
EJERCICIOS VIDEO 42_1
Programa una función que dado un array numerico devuelve un objeto con dos arreglos, el
primero tendrá los números ordenados en forma ascendente y el segundo de forma descendente
ej:  miFuncion([7,5,7,8,6])
devuelve: {asc:[5,6,7,7,8], desc: [8,7,7,6,5]}
*/


console.log("EJERCICIOS VIDEO 42_1");
//CON FUNCION EXPRESADA
const ordenarArreglo = (arr = undefined) => {
    if (arr === undefined) return console.warn("NO has ingresado un arreglo de numeros");
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste NO es un arreglo");
    if (arr.length === 0) return console.error("El arreglo está vacio");

    for (let num of arr) {
        if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
    }

    return console.log({
        arr,
        //map devuelve una copia del array original, pudiendo realizar modificaciones en los elementos que devuelve
        asc: arr.map(el => el).sort(),
        des: arr.map(el => el).sort().reverse()
    });
}

ordenarArreglo();
ordenarArreglo(true);
ordenarArreglo([]);
ordenarArreglo([1,4,5,"tu"]);
ordenarArreglo([7,5,7,8,6]);