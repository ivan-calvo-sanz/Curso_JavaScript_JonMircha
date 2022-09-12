/*
EJERCICIOS VIDEO 40_4
Fusionar Jercicios 40_2 y 40_3
*/


console.log("EJERCICIOS VIDEO 40_4");
//CON FUNCION EXPRESADA
const validarPatron = (cadena = "", patron = undefined) => {
    if (!cadena) return console.warn("NO ingresaste ninguna cadenaa");
    if (typeof cadena !== "string") return console.error(`El valor ${cadena} ingresado, no es una cadena de texto`);

    if (patron === undefined) return console.warn("NO ingresaste ningun patron");
    if (!patron instanceof RegExp) return console.error(`El valor ${patron} ingresado, no es una expresión regular`);

    let expReg = patron.test(cadena);

    return (expReg)
        ? console.log(`La cadena ${cadena}, cumple con el patrón ingresado`)
        : console.log(`La cadena ${cadena}, NO cumple con el patrón ingresado`);
}

validarPatron();
validarPatron(123, "ABCD");
validarPatron("Ivan Calvo", /^[A-Za-zÑñ\s]+$/g);
validarPatron("jonmircha@gmail.com", /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z09-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i);