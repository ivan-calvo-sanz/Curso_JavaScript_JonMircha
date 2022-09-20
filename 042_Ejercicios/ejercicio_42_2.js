/*
EJERCICIOS VIDEO 42_2
Programa una función que dado un array de elementos elimine los duplicados
ej:  miFuncion(["x",10,"x",2,"10",10,true,true])
devuelve: ["x",10,2,"10",true]
*/


console.log("EJERCICIOS VIDEO 42_2");
//CON FUNCION EXPRESADA
const quitarDuplicados = (arr = undefined) => {
    if (arr === undefined) return console.warn("NO has ingresado un arreglo de numeros");
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste NO es un arreglo");
    if (arr.length === 0) return console.error("El arreglo está vacio");
    if (arr.length < 2) return console.warn("El arreglo debe tener al menos 2 elementos");

    return console.log({
        original: arr,
        arrSinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index)
    })
}

quitarDuplicados();
quitarDuplicados(true);
quitarDuplicados([]);
quitarDuplicados([1]);
quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);



//mediante Set
const quitarDuplicados_v2 = (arr = undefined) => {
    if (arr === undefined) return console.warn("NO has ingresado un arreglo de numeros");
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste NO es un arreglo");
    if (arr.length === 0) return console.error("El arreglo está vacio");
    if (arr.length < 2) return console.warn("El arreglo debe tener al menos 2 elementos");

    return console.log({
        original: arr,
        //Set devuelve un elemtno iterable del mismo tipo que recibe, eliminando los elementos duplicados, utilizando el expred Operator.
        arrSinDuplicados: [...new Set(arr)]
    })
}

quitarDuplicados();
quitarDuplicados(true);
quitarDuplicados([]);
quitarDuplicados([1]);
quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);