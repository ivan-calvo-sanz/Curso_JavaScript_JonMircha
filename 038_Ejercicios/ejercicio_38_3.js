/*
EJERCICIOS VIDEO 38_3
Programa una función para convertir grados Celsius a Fahrenheit
y viceversa
ej:   miFuncion(0,"C")  devolverá: 32F
convertir de ºC a ºF   (100 C x 9/5) + 32
convertir de ºF a ºC   (32 F - 32) X 5/9
*/


console.log("EJERCICIOS VIDEO 38_3");
//CON FUNCION EXPRESADA
const convertirGrados = (grados = undefined, unidad = undefined) => {
    if (grados === undefined) return console.warn("No ingresaste grados a convertir");
    if (typeof grados !== "number") return console.error(`El avlor de ${grados} NO es un numero`)
    if (unidad === undefined) return console.warn("NO has ingresado tipo de grados a convertir")
    if (typeof unidad !== "string") return console.error(`El valor ingresado ${unidad} NO es una cadena de texto`)
    if (unidad.length !== 1) return console.warn("Valor de unidad no reconocido");
    if (!/(C|F)/.test(unidad)) return console.warn(`El valor unidad debe ser "C" o "F"`)

    if (unidad === "C") {
        return console.log(`${grados}ºC =${Math.round(grados * (9 / 5) + 32)}ºF`);
    } else {
        return console.log(`${grados}ºF =${Math.round((grados - 32) * (5 / 9))}ºC`);
    }

}

convertirGrados();
convertirGrados("adv");
convertirGrados("adv", 34);
convertirGrados(34);
convertirGrados(34, 45);
convertirGrados(34, "er");
convertirGrados(0, "v");

convertirGrados(100, "C");
convertirGrados(230, "F");