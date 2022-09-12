/*
EJERCICIOS VIDEO 40_2
Programa una función que valide que un texto sea un nombre valido
ej:  miFuncion("Jonathan MirCha")
devuelve: true
*/


console.log("EJERCICIOS VIDEO 40_2");
//CON FUNCION EXPRESADA
const validarNombre = (nombre = "") => {
    if (!nombre) return console.warn("NO ingresaste un nombre");
    if (typeof nombre !== "string") return console.error(`El valor ${nombre} ingresado, no es una cadena de texto`);

    let expReg = /^[A-Za-zÑñ\s]+$/g.test(nombre);
    return (expReg)
        ? console.log(`${nombre}, es un nombre válido`)
        : console.log(`${nombre}, NO es un nombre válido`);
}


validarNombre();
validarNombre(123);
validarNombre("Ivan Clavo, clavo");
validarNombre("Ivan Calvo");