/*
EJERCICIOS VIDEO 35_4
Programa una función que repita un texto X veces,
eje. miFuncion('Hola Mundo',3) devolverá
Hola Mundo Hola Mundo Hola Mundo 
*/

//FUNCION EXPRESADA
const repetirTexto = (texto = "", repeticiones = undefined) => {
    if (!texto) return console.warn("NO has ingresado texto");
    if (repeticiones === undefined) return console.warn("NO has ingresado nº de repeticiones");
    if (repeticiones === 0) return console.error("El nº de repeticiones NO puede ser 0");
    if (Math.sign(repeticiones) === -1) return console.error("El nº de repeticiones NO puede ser NEGATIVO");

    for (let i = 0; i < repeticiones; i++) {
        console.log(`${texto}, ${i + 1}`);
    }
}


repetirTexto('Hola Mundo', 3);
repetirTexto('Hola Mundo', 0);
repetirTexto('Hola Mundo', -3);
repetirTexto('Hola Mundo');
repetirTexto("", 3); 