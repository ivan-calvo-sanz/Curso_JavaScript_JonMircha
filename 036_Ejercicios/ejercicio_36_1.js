/*
EJERCICIOS VIDEO 36_1
Programa una función que invierta las palabras
de una cadena de texto
ejem. miFuncion("Hola Mundo") 
devolverá "odnuM aloH"
*/


console.log("EJERCICIOS VIDEO 36_1");
//CON FUNCION EXPRESADA
const invertirCadena = (cadena = "") =>
    (!cadena)
        ? console.warn("No has ingresado cadena de texto")
        : console.log(cadena.split("").reverse().join(""));

invertirCadena("Hola Mundo");    
invertirCadena();   