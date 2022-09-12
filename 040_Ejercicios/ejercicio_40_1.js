/*
EJERCICIOS VIDEO 40_1
Programa una función que dada una cadena de texto cuente el número de vocales y consonantes,
ej:  miFuncion("Hola Mundo")
devuelve: Vocales: 4, Consonantes: 5
*/


console.log("EJERCICIOS VIDEO 40_1");
//CON FUNCION EXPRESADA
const contarLetras = (cadena = "") => {
    if (!cadena) return console.warn("NO ingresaste una cadena de texto");
    if (typeof cadena !== "string") return console.error(`El valor ${cadena} ingresado, no es una cadena de texto`);

    let vocales = 0,
        consonantes = 0;
    cadena = cadena.toLocaleLowerCase();

    for (let letra of cadena) {
        if (/[aeiouáéíóúü]/.test(letra)) vocales++;
        if (/[bcdfghjklmñnpqrstvwxyz]/.test(letra)) consonantes++;
    }

    return console.log({
        cadena,
        vocales,
        consonantes
    })
}

contarLetras();
contarLetras(123);
contarLetras("Hola Mundo");