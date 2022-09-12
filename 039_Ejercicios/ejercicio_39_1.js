/*
EJERCICIOS VIDEO 39_1
Programa una función para convertir números de base binaria a decimal y viceversa
miFuncion(100,2) devolverá 4 base 10
*/


console.log("EJERCICIOS VIDEO 39_1");
//CON FUNCION EXPRESADA
const covertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.warn("NO ingresaste el número a convertir");
    if (typeof numero !== "number") return console.error(`El valor ${numero} NO es un numero`);
    if (base === undefined) return console.warn("NO ingresaste la base a convertir");
    if (typeof base !== "number") return console.error(`El valor de la base NO es un número`);

    if (base === 2) {
        return console.log(`${numero} base ${base} = ${parseInt(numero, base)}  base 10`)
    } else if (base === 10) {
        return console.log(`${numero} base ${base} = ${numero.toString(base)}  base 2`)
    }


}

covertirBinarioDecimal();
covertirBinarioDecimal("asd");
covertirBinarioDecimal(100);
covertirBinarioDecimal(100, "2");
covertirBinarioDecimal(100, 2);
covertirBinarioDecimal(4, 10);