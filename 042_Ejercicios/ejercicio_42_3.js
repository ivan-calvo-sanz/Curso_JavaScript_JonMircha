/*
EJERCICIOS VIDEO 42_3
Programa una función que dado un array de numeros obtenga el promedio
ej:  miFuncion([9,8,7,6,5,4,3,2,1,0])
devuelve: 4.5
*/


console.log("EJERCICIOS VIDEO 42_3");
//CON FUNCION EXPRESADA
const promedio = (arr = undefined) => {
    if (arr === undefined) return console.warn("NO has ingresado un arreglo de numeros");
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste NO es un arreglo");
    if (arr.length === 0) return console.error("El arreglo está vacio");

    for (let num of arr) {
        if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
    }

    return console.log(
        arr.reduce((total, num, index, arr) => {
            total += num;
            if (index === arr.length - 1) {
                return `El promedio de ${arr.join("+")} es ${total / arr.length}`;
            } else {
                return total;
            }
        })
    )
}


promedio();
promedio({});
promedio([]);
promedio([2, true]);
promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);