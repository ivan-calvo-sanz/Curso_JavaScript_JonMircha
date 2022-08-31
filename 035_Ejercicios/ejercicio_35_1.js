/*
EJERCICIOS VIDEO 35_1
Programa una función que cuente el número de 
caracteres de una cadea de texto, 
ejem. contarCaracteres
("Hola Mundo") devolverá 10
*/


//CON FUNCION DECLARADA
/*
function contarCaracteres(cadena = "") {
    if (!cadena) {
        console.warn("No ingresaste ninguna cadena");
    } else {
        console.log(`La cadena ${cadena} tiene ${cadena.length} caraceres`);
    }
};
*/

//CON FUNCION EXPRESADA
const contarCaracteres = (cadena = "") => 
    (!cadena) 
        ? console.warn("No ingresaste ninguna cadena") 
        : console.log(`La cadena ${cadena} tiene ${cadena.length} caraceres`);


console.log("EJERCICIOS VIDEO 35_1");
contarCaracteres("");
contarCaracteres("Hola Mundo");