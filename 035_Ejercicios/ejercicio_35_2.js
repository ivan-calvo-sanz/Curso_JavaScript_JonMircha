/*
EJERCICIOS VIDEO 35_2
Programa una función que te devuelva el
texto recortado según el número ed caracteres
indicados.
ejem. miFuncion("Hola Mundo", 4) devolverá "Hola"
*/

//FUNCION EXPRESADA
const recortarTexto = (cadena = "", longitud = undefined) =>
    (!cadena)
        ? console.warn("NO existe el texto")
        : (!longitud)
            ? console.warn("NO has definido longitud de cadena a recortar")
            : console.info(cadena.slice(0, longitud));
 

console.log("EJERCICIOS VIDEO 35_2");
recortarTexto("Hola");
recortarTexto("", 5);
recortarTexto("Hola Mundo", 4);